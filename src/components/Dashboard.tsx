import { useState, useEffect } from 'react';
import { 
  TrendingUp, 
  FileText, 
  Settings, 
  LogOut,
  DollarSign,
  Calendar,
  Download,
  Eye,
  BarChart3,
  PieChart,
  Building,
  Wallet,
  Bell,
  User,
  CreditCard,
  Shield,
  MapPin,
  Phone,
  Mail,
  AlertCircle,
  CheckCircle
} from 'lucide-react';
import { 
  collection, 
  query, 
  where, 
  orderBy, 
  onSnapshot,
  doc,
  updateDoc,
  getDocs, 
  Unsubscribe
} from 'firebase/firestore';
import { db } from '../firebase/config';
import { useAuth } from './contexts/AuthContext';

const Dashboard = () => {
  const { currentUser, userData, logout } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');
  const [loading, setLoading] = useState(true);
  const [portfolioData, setPortfolioData] = useState({
    totalInvestment: 0,
    currentValue: 0,
    totalYield: 0,
    monthlyIncome: 0,
    properties: [],
    transactions: [],
    documents: [],
    notifications: []
  });

  useEffect(() => {
    if (!currentUser?.uid) {
      setLoading(false);
      return;
    }

    const unsubscribeCallbacks: Unsubscribe[] = [];
    
    // Listen to user investments and properties
    const investmentsQuery = query(
      collection(db, 'investments'),
      where('userId', '==', currentUser.uid),
      where('status', '==', 'active')
    );
    
    const unsubscribeInvestments = onSnapshot(investmentsQuery, async (snapshot) => {
      const investments = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      
      let totalInvestment = 0;
      let currentValue = 0;
      let monthlyIncome = 0;
      
      // Fetch property details for all investments concurrently
      const propertiesPromises = investments.map(investment =>
        getDocs(query(collection(db, 'properties'), where('__name__', '==', investment.propertyId)))
      );
      
      const propertySnapshots = await Promise.all(propertiesPromises);
      
      const propertiesWithDetails = investments.map((investment, index) => {
        const propertySnapshot = propertySnapshots[index];
        const propertyDetails = propertySnapshot.empty ? null : { id: propertySnapshot.docs[0].id, ...propertySnapshot.docs[0].data() };
        
        // Calculate portfolio totals here
        totalInvestment += investment.investmentAmount;
        currentValue += investment.investmentAmount * (1 + investment.actualYield / 100);
        monthlyIncome += investment.expectedMonthlyIncome;
        
        return {
          ...investment,
          propertyDetails
        };
      });
      
      const totalYield = totalInvestment > 0 ? ((currentValue - totalInvestment) / totalInvestment) * 100 : 0;
      
      setPortfolioData(prev => ({
        ...prev,
        totalInvestment,
        currentValue,
        totalYield,
        monthlyIncome,
        properties: propertiesWithDetails.filter(p => p.propertyDetails !== null)
      }));
    });
    unsubscribeCallbacks.push(unsubscribeInvestments);

    // Listen to user transactions
    const transactionsQuery = query(
      collection(db, 'transactions'),
      where('userId', '==', currentUser.uid),
      orderBy('date', 'desc')
    );
    
    const unsubscribeTransactions = onSnapshot(transactionsQuery, (snapshot) => {
      const transactions = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setPortfolioData(prev => ({ ...prev, transactions }));
    });
    unsubscribeCallbacks.push(unsubscribeTransactions);

    // Listen to user documents
    const documentsQuery = query(
      collection(db, 'documents'),
      where('relatedTo.type', '==', 'investment'),
      where('visibility', 'in', ['public', 'owner_only'])
    );
    
    const unsubscribeDocuments = onSnapshot(documentsQuery, (snapshot) => {
      const documents = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setPortfolioData(prev => ({ ...prev, documents }));
    });
    unsubscribeCallbacks.push(unsubscribeDocuments);

    // Listen to user notifications
    const notificationsQuery = query(
      collection(db, 'notifications'),
      where('userId', '==', currentUser.uid),
      orderBy('createdAt', 'desc')
    );
    
    const unsubscribeNotifications = onSnapshot(notificationsQuery, (snapshot) => {
      const notifications = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setPortfolioData(prev => ({ ...prev, notifications }));
    });
    unsubscribeCallbacks.push(unsubscribeNotifications);

    setLoading(false);

    // Cleanup function
    return () => {
      unsubscribeCallbacks.forEach(unsubscribe => unsubscribe());
    };
  }, [currentUser]);

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error('Failed to log out', error);
    }
  };

  const markNotificationAsRead = async (notificationId) => {
    try {
      await updateDoc(doc(db, 'notifications', notificationId), {
        status: 'read',
        readAt: new Date().toISOString()
      });
    } catch (error) {
      console.error('Error marking notification as read:', error);
    }
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-KE', {
      style: 'currency',
      currency: 'KES',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  const menuItems = [
    { id: 'overview', label: 'Overview', icon: BarChart3 },
    { id: 'properties', label: 'My Properties', icon: Building },
    { id: 'transactions', label: 'Transactions', icon: Wallet },
    { id: 'documents', label: 'Documents', icon: FileText },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'settings', label: 'Settings', icon: Settings }
  ];

  const renderOverview = () => (
    <div className="space-y-8">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <div className="bg-blue-100 p-3 rounded-lg">
              <DollarSign className="h-6 w-6 text-blue-600" />
            </div>
            <span className="text-green-500 text-sm font-semibold">
              {portfolioData.totalYield > 0 ? `+${portfolioData.totalYield.toFixed(1)}%` : '0%'}
            </span>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-1">
            {formatCurrency(portfolioData.totalInvestment)}
          </h3>
          <p className="text-gray-600 text-sm">Total Investment</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <div className="bg-green-100 p-3 rounded-lg">
              <TrendingUp className="h-6 w-6 text-green-600" />
            </div>
            <span className="text-green-500 text-sm font-semibold">
              +{((portfolioData.currentValue - portfolioData.totalInvestment) / portfolioData.totalInvestment * 100 || 0).toFixed(1)}%
            </span>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-1">
            {formatCurrency(portfolioData.currentValue)}
          </h3>
          <p className="text-gray-600 text-sm">Current Value</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <div className="bg-purple-100 p-3 rounded-lg">
              <PieChart className="h-6 w-6 text-purple-600" />
            </div>
            <span className="text-green-500 text-sm font-semibold">Annual</span>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-1">
            {portfolioData.totalYield.toFixed(1)}%
          </h3>
          <p className="text-gray-600 text-sm">Portfolio Yield</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <div className="bg-orange-100 p-3 rounded-lg">
              <Calendar className="h-6 w-6 text-orange-600" />
            </div>
            <span className="text-green-500 text-sm font-semibold">Monthly</span>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-1">
            {formatCurrency(portfolioData.monthlyIncome)}
          </h3>
          <p className="text-gray-600 text-sm">Expected Income</p>
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-6">Recent Transactions</h3>
        <div className="space-y-4">
          {portfolioData.transactions.slice(0, 5).map((transaction) => (
            <div key={transaction.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
              <div className="flex items-center">
                <div className={`p-2 rounded-lg mr-4 ${
                  transaction.type === 'income' ? 'bg-green-100' : 'bg-red-100'
                }`}>
                  <DollarSign className={`h-5 w-5 ${
                    transaction.type === 'income' ? 'text-green-600' : 'text-red-600'
                  }`} />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{transaction.description}</p>
                  <p className="text-gray-600 text-sm">
                    {new Date(transaction.date).toLocaleDateString()}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className={`font-bold ${
                  transaction.type === 'income' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {transaction.type === 'income' ? '+' : '-'}{formatCurrency(transaction.amount)}
                </p>
                <p className="text-gray-500 text-sm capitalize">{transaction.status}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderProperties = () => (
    <div className="space-y-6">
      {portfolioData.properties.map((investment) => (
        <div key={investment.id} className="bg-white rounded-2xl shadow-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">
                {investment.propertyDetails?.name}
              </h3>
              <p className="text-gray-600">{investment.propertyDetails?.type}</p>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold text-blue-600">
                {investment.actualYield?.toFixed(1)}%
              </p>
              <p className="text-gray-600 text-sm">Annual Yield</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-gray-50 p-4 rounded-xl">
              <p className="text-gray-600 text-sm mb-1">Your Investment</p>
              <p className="font-bold text-gray-900">
                {formatCurrency(investment.investmentAmount)}
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded-xl">
              <p className="text-gray-600 text-sm mb-1">Current Value</p>
              <p className="font-bold text-gray-900">
                {formatCurrency(investment.investmentAmount * (1 + investment.actualYield / 100))}
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded-xl">
              <p className="text-gray-600 text-sm mb-1">Monthly Income</p>
              <p className="font-bold text-gray-900">
                {formatCurrency(investment.expectedMonthlyIncome)}
              </p>
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">
                Shares Owned: {investment.sharesOwned?.toFixed(2)}%
              </p>
              <p className="text-gray-600 text-sm">
                Purchase Date: {new Date(investment.purchaseDate).toLocaleDateString()}
              </p>
            </div>
            <div className="flex space-x-2">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors">
                View Details
              </button>
              <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm font-semibold transition-colors">
                Download Report
              </button>
            </div>
          </div>
        </div>
      ))}
      
      {portfolioData.properties.length === 0 && (
        <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
          <Building className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">No Properties Yet</h3>
          <p className="text-gray-600">Start your investment journey with us today.</p>
        </div>
      )}
    </div>
  );

  const renderTransactions = () => (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-gray-900">Transaction History</h3>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors">
          Download Report
        </button>
      </div>
      
      <div className="space-y-4">
        {portfolioData.transactions.map((transaction) => (
          <div key={transaction.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-xl">
            <div className="flex items-center">
              <div className={`p-2 rounded-lg mr-4 ${
                transaction.type === 'income' ? 'bg-green-100' : 
                transaction.type === 'expense' ? 'bg-red-100' : 'bg-blue-100'
              }`}>
                <DollarSign className={`h-5 w-5 ${
                  transaction.type === 'income' ? 'text-green-600' : 
                  transaction.type === 'expense' ? 'text-red-600' : 'text-blue-600'
                }`} />
              </div>
              <div>
                <p className="font-semibold text-gray-900">{transaction.description}</p>
                <p className="text-gray-600 text-sm">
                  {transaction.category?.replace('_', ' ').toUpperCase()} • 
                  {new Date(transaction.date).toLocaleDateString()}
                </p>
                {transaction.reference && (
                  <p className="text-gray-500 text-xs">Ref: {transaction.reference}</p>
                )}
              </div>
            </div>
            <div className="text-right">
              <p className={`font-bold ${
                transaction.type === 'income' ? 'text-green-600' : 
                transaction.type === 'expense' ? 'text-red-600' : 'text-blue-600'
              }`}>
                {transaction.type === 'income' ? '+' : transaction.type === 'expense' ? '-' : ''}
                {formatCurrency(transaction.amount)}
              </p>
              <div className="flex items-center space-x-2">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  transaction.status === 'completed' ? 'bg-green-100 text-green-800' :
                  transaction.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-red-100 text-red-800'
                }`}>
                  {transaction.status}
                </span>
                {transaction.receiptUrl && (
                  <button className="p-1 text-gray-400 hover:text-gray-600">
                    <Download className="h-4 w-4" />
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
        
        {portfolioData.transactions.length === 0 && (
          <div className="text-center py-8">
            <Wallet className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h4 className="text-lg font-semibold text-gray-900 mb-2">No Transactions Yet</h4>
            <p className="text-gray-600">Your transaction history will appear here.</p>
          </div>
        )}
      </div>
    </div>
  );

  const renderDocuments = () => (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-6">My Documents</h3>
      
      <div className="space-y-4">
        {portfolioData.documents.map((document) => (
          <div key={document.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
            <div className="flex items-center">
              <div className="bg-blue-100 p-2 rounded-lg mr-4">
                <FileText className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">{document.name}</p>
                <p className="text-gray-600 text-sm">
                  {document.metadata?.propertyName} • 
                  {new Date(document.createdAt).toLocaleDateString()}
                </p>
                <div className="flex items-center space-x-2 mt-1">
                  {document.tags?.map((tag, index) => (
                    <span key={index} className="px-2 py-1 bg-gray-200 text-gray-700 text-xs rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <button className="p-2 bg-gray-200 hover:bg-gray-300 rounded-lg transition-colors">
                <Eye className="h-4 w-4 text-gray-600" />
              </button>
              <button className="p-2 bg-blue-100 hover:bg-blue-200 rounded-lg transition-colors">
                <Download className="h-4 w-4 text-blue-600" />
              </button>
            </div>
          </div>
        ))}
        
        {portfolioData.documents.length === 0 && (
          <div className="text-center py-8">
            <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h4 className="text-lg font-semibold text-gray-900 mb-2">No Documents Yet</h4>
            <p className="text-gray-600">Your property documents will appear here.</p>
          </div>
        )}
      </div>
    </div>
  );

  const renderNotifications = () => (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-6">Notifications</h3>
      
      <div className="space-y-4">
        {portfolioData.notifications.map((notification) => (
          <div 
            key={notification.id} 
            className={`p-4 rounded-xl border cursor-pointer transition-colors ${
              notification.status === 'read' ? 'bg-gray-50 border-gray-200' : 'bg-blue-50 border-blue-200'
            }`}
            onClick={() => {
              if (notification.status !== 'read') {
                markNotificationAsRead(notification.id);
              }
            }}
          >
            <div className="flex items-start justify-between">
              <div className="flex items-start">
                <div className={`p-2 rounded-lg mr-3 ${
                  notification.type === 'income_received' ? 'bg-green-100' :
                  notification.type === 'property_update' ? 'bg-blue-100' :
                  notification.type === 'document_uploaded' ? 'bg-purple-100' :
                  'bg-yellow-100'
                }`}>
                  {notification.type === 'income_received' ? <DollarSign className="h-5 w-5 text-green-600" /> :
                   notification.type === 'property_update' ? <Building className="h-5 w-5 text-blue-600" /> :
                   notification.type === 'document_uploaded' ? <FileText className="h-5 w-5 text-purple-600" /> :
                   <AlertCircle className="h-5 w-5 text-yellow-600" />}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{notification.title}</h4>
                  <p className="text-gray-600 text-sm mt-1">{notification.message}</p>
                  <p className="text-gray-500 text-xs mt-2">
                    {new Date(notification.createdAt).toLocaleDateString()} • 
                    {new Date(notification.createdAt).toLocaleTimeString()}
                  </p>
                </div>
              </div>
              {notification.status !== 'read' && (
                <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
              )}
            </div>
          </div>
        ))}
        
        {portfolioData.notifications.length === 0 && (
          <div className="text-center py-8">
            <Bell className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h4 className="text-lg font-semibold text-gray-900 mb-2">No Notifications</h4>
            <p className="text-gray-600">You're all caught up!</p>
          </div>
        )}
      </div>
    </div>
  );

  const renderProfile = () => (
    <div className="space-y-6">
      {/* Profile Overview */}
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <div className="flex items-center space-x-6 mb-6">
          <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center">
            {userData?.profileImage ? (
              <img src={userData.profileImage} alt="Profile" className="w-full h-full rounded-full object-cover" />
            ) : (
              <User className="h-10 w-10 text-blue-600" />
            )}
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900">{userData?.displayName}</h3>
            <p className="text-gray-600">{userData?.email}</p>
            <div className="flex items-center mt-2">
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                userData?.kycStatus === 'verified' ? 'bg-green-100 text-green-800' :
                userData?.kycStatus === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                'bg-red-100 text-red-800'
              }`}>
                <CheckCircle className="h-4 w-4 inline mr-1" />
                {userData?.kycStatus || 'Unverified'}
              </span>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">Personal Information</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-gray-400 mr-3" />
                <span className="text-gray-700">{userData?.phoneNumber || 'Not provided'}</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-gray-400 mr-3" />
                <span className="text-gray-700">{userData?.email}</span>
              </div>
              <div className="flex items-center">
                <CreditCard className="h-5 w-5 text-gray-400 mr-3" />
                <span className="text-gray-700">{userData?.nationalId || 'Not provided'}</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">Address Information</h4>
            <div className="flex items-start">
              <MapPin className="h-5 w-5 text-gray-400 mr-3 mt-1" />
              <div className="text-gray-700">
                {userData?.address ? (
                  <div>
                    <p>{userData.address.street}</p>
                    <p>{userData.address.city}, {userData.address.county}</p>
                    <p>{userData.address.postalCode}</p>
                  </div>
                ) : (
                  <span>Not provided</span>
                )}
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-gray-200">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors">
            Edit Profile
          </button>
        </div>
      </div>

      {/* KYC Status */}
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <h4 className="font-semibold text-gray-900 mb-4">Verification Status</h4>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
            <div className="flex items-center">
              <Shield className="h-5 w-5 text-blue-600 mr-3" />
              <span className="font-medium text-gray-900">Identity Verification</span>
            </div>
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${
              userData?.kycStatus === 'verified' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
            }`}>
              {userData?.kycStatus === 'verified' ? 'Verified' : 'Pending'}
            </span>
          </div>
          
          {userData?.kycStatus !== 'verified' && (
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
              <div className="flex items-center">
                <AlertCircle className="h-5 w-5 text-yellow-600 mr-3" />
                <div>
                  <p className="font-medium text-yellow-800">Verification Required</p>
                  <p className="text-yellow-700 text-sm mt-1">
                    Please upload your identity documents to complete verification.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  const renderSettings = () => (
    <div className="space-y-6">
      {/* Account Settings */}
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <h4 className="font-semibold text-gray-900 mb-4">Account Settings</h4>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-900">Email Notifications</p>
              <p className="text-gray-600 text-sm">Receive updates about your investments</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input 
                type="checkbox" 
                className="sr-only peer" 
                defaultChecked={userData?.preferences?.emailNotifications}
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-900">SMS Notifications</p>
              <p className="text-gray-600 text-sm">Get important updates via SMS</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input 
                type="checkbox" 
                className="sr-only peer" 
                defaultChecked={userData?.preferences?.smsNotifications}
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-900">Marketing Emails</p>
              <p className="text-gray-600 text-sm">Receive promotional offers and news</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input 
                type="checkbox" 
                className="sr-only peer" 
                defaultChecked={userData?.preferences?.marketingEmails}
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>
        </div>
      </div>

      {/* Security Settings */}
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <h4 className="font-semibold text-gray-900 mb-4">Security</h4>
        <div className="space-y-4">
          <button className="w-full text-left p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
            <p className="font-medium text-gray-900">Change Password</p>
            <p className="text-gray-600 text-sm">Update your account password</p>
          </button>
          
          <button className="w-full text-left p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
            <p className="font-medium text-gray-900">Two-Factor Authentication</p>
            <p className="text-gray-600 text-sm">Add an extra layer of security</p>
          </button>
          
          <button className="w-full text-left p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
            <p className="font-medium text-gray-900">Login History</p>
            <p className="text-gray-600 text-sm">View recent account activity</p>
          </button>
        </div>
      </div>

      {/* Data & Privacy */}
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <h4 className="font-semibold text-gray-900 mb-4">Data & Privacy</h4>
        <div className="space-y-4">
          <button className="w-full text-left p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
            <p className="font-medium text-gray-900">Download My Data</p>
            <p className="text-gray-600 text-sm">Get a copy of your account data</p>
          </button>
          
          <button className="w-full text-left p-4 bg-red-50 rounded-xl hover:bg-red-100 transition-colors">
            <p className="font-medium text-red-900">Delete Account</p>
            <p className="text-red-600 text-sm">Permanently delete your account</p>
          </button>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'overview': return renderOverview();
      case 'properties': return renderProperties();
      case 'transactions': return renderTransactions();
      case 'documents': return renderDocuments();
      case 'notifications': return renderNotifications();
      case 'profile': return renderProfile();
      case 'settings': return renderSettings();
      default: return renderOverview();
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              Welcome back, {userData?.displayName || currentUser?.displayName}
            </h1>
            <p className="text-gray-600 text-lg">
              Here's your investment portfolio overview
            </p>
          </div>
          <div className="flex items-center space-x-4">
            {/* Notifications Badge */}
            <div className="relative">
              <Bell className="h-6 w-6 text-gray-600" />
              {portfolioData.notifications.filter(n => n.status !== 'read').length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {portfolioData.notifications.filter(n => n.status !== 'read').length}
                </span>
              )}
            </div>
            
            <button
              onClick={handleLogout}
              className="flex items-center bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors"
            >
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-8">
              <nav className="space-y-2">
                {menuItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full flex items-center px-4 py-3 rounded-xl font-medium transition-all ${
                      activeTab === item.id
                        ? 'bg-blue-600 text-white shadow-lg'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <item.icon className="h-5 w-5 mr-3" />
                    <span>{item.label}</span>
                    {item.id === 'notifications' && portfolioData.notifications.filter(n => n.status !== 'read').length > 0 && (
                      <span className="ml-auto bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                        {portfolioData.notifications.filter(n => n.status !== 'read').length}
                      </span>
                    )}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;