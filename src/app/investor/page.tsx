import React, { useState } from "react";
import { X, Mail, Lock, User, Eye, EyeOff, Shield, Trophy, Globe, TrendingUp, Building2, Users, Award, ChevronRight } from "lucide-react";

const InvestorPage: React.FC = () => {
  const [authOpen, setAuthOpen] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  const openAuth = () => setAuthOpen(true);
  const closeAuth = () => setAuthOpen(false);

  return (
    <div style={{ 
      minHeight: '100vh', 
      fontFamily: "'Crimson Text', 'Times New Roman', serif",
      color: '#1a1a1a',
      backgroundColor: '#fafafa'
    }}>
      

      {/* The Problem - Why Now */}
      <section style={{ 
        padding: '120px 32px', 
        backgroundColor: '#f8f8f8'
      }}>
        <div style={{ 
          maxWidth: '1200px', 
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '80px',
          alignItems: 'center'
        }}>
          <div>
            <h2 style={{
              fontSize: '48px',
              color: '#1a1a1a',
              marginBottom: '32px',
              fontFamily: "'Playfair Display', serif",
              fontWeight: '300',
              lineHeight: '1.2'
            }}>
              The Crisis Facing 
              <em style={{ color: '#d4af37' }}>Serious</em> Investors
            </h2>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              {[
                {
                  problem: 'Traditional markets are exhausted',
                  detail: 'S&P 500 trading at 28x earnings. Bond yields at historical lows. Your wealth is stagnating in overpriced assets.'
                },
                {
                  problem: 'Institutional money is fleeing to alternatives',
                  detail: 'Harvard, Yale, and Norwegian Pension Fund have moved 40%+ to alternative investments. They know something you need to know.'
                },
                {
                  problem: 'Africa is the final frontier',
                  detail: 'While others chase depleted opportunities, the last untapped market for institutional-grade real estate remains: Africa.'
                }
              ].map((item, index) => (
                <div key={index} style={{ borderLeft: '3px solid #d4af37', paddingLeft: '24px' }}>
                  <h4 style={{ 
                    fontSize: '20px', 
                    color: '#1a1a1a', 
                    marginBottom: '12px',
                    fontFamily: "'Playfair Display', serif"
                  }}>
                    {item.problem}
                  </h4>
                  <p style={{ color: '#666', fontSize: '16px', lineHeight: '1.6' }}>
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div style={{
            backgroundColor: '#1a1a1a',
            color: '#f5f5f5',
            padding: '48px',
            borderRadius: '2px'
          }}>
            <h3 style={{
              fontSize: '28px',
              color: '#d4af37',
              marginBottom: '24px',
              fontFamily: "'Playfair Display', serif"
            }}>
              The Murivest Advantage
            </h3>
            
            <ul style={{ 
              listStyle: 'none', 
              padding: '0',
              display: 'flex',
              flexDirection: 'column',
              gap: '20px'
            }}>
              {[
                'Exclusive access to pre-market opportunities',
                'Government partnerships and regulatory protection',  
                'Currency hedging and political risk insurance',
                'Local expertise with international standards',
                'Exit strategies planned before entry'
              ].map((benefit, index) => (
                <li key={index} style={{ 
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '12px'
                }}>
                  <ChevronRight style={{ 
                    width: '16px', 
                    height: '16px', 
                    color: '#d4af37',
                    marginTop: '2px',
                    flexShrink: 0
                  }} />
                  <span style={{ fontSize: '16px', lineHeight: '1.5' }}>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>


      {/* Final CTA - Create Urgency */}
      <section style={{ 
        padding: '120px 32px', 
        background: 'linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)',
        color: '#f5f5f5',
        textAlign: 'center'
      }}>
        <div style={{ 
          maxWidth: '1000px', 
          margin: '0 auto' 
        }}>
          <h2 style={{
            fontSize: '56px',
            marginBottom: '32px',
            fontFamily: "'Playfair Display', serif",
            fontWeight: '300'
          }}>
            Your Invitation Expires Soon
          </h2>
          
          <p style={{
            fontSize: '24px',
            marginBottom: '48px',
            color: '#e5e5e5',
            lineHeight: '1.5',
            maxWidth: '800px',
            margin: '0 auto 48px'
          }}>
            This private allocation was reserved for existing clients and referrals only. 
            Due to overwhelming demand, we're extending access to qualified investors for 
            <strong style={{ color: '#d4af37' }}> 72 hours only</strong>.
          </p>
          
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '24px'
          }}>
            <button 
              onClick={openAuth}
              style={{
                backgroundColor: '#d4af37',
                color: '#1a1a1a',
                padding: '20px 48px',
                fontSize: '20px',
                fontFamily: "'Playfair Display', serif",
                fontWeight: '600',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: '0 12px 32px rgba(212, 175, 55, 0.3)',
                letterSpacing: '0.05em',
                textTransform: 'uppercase'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#c19b26';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 16px 40px rgba(212, 175, 55, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#d4af37';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 12px 32px rgba(212, 175, 55, 0.3)';
              }}
            >
              Secure Your Private Allocation
            </button>
            
            <p style={{
              fontSize: '14px',
              color: '#a0a0a0'
            }}>
              Qualification call required • Accredited investors only • Limited to 72 hours
            </p>
            
            <div style={{
              marginTop: '32px',
              padding: '24px',
              backgroundColor: 'rgba(212, 175, 55, 0.05)',
              border: '1px solid rgba(212, 175, 55, 0.2)',
              borderRadius: '2px',
              maxWidth: '600px'
            }}>
              <p style={{
                fontSize: '16px',
                color: '#e5e5e5',
                lineHeight: '1.5',
                margin: '0',
                textAlign: 'center'
              }}>
                <strong>"The single best investment decision our family made in 30 years. 
                The returns have been extraordinary, but the peace of mind is priceless."</strong>
                <br /><br />
                <em style={{ color: '#d4af37' }}>- Lord Pemberton, Pemberton Family Trust (Client since 1994)</em>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Consistent Auth Modal */}
      {authOpen && (
        <div style={{
          position: 'fixed',
          inset: '0',
          backgroundColor: 'rgba(0,0,0,0.75)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: '1000',
          backdropFilter: 'blur(4px)'
        }}>
          <div style={{
            backgroundColor: 'white',
            borderRadius: '8px',
            boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)',
            width: '90%',
            maxWidth: '500px',
            overflow: 'hidden'
          }}>
            {/* Header */}
            <div style={{
              backgroundColor: '#0f172a',
              color: 'white',
              padding: '32px',
              position: 'relative'
            }}>
              <button
                onClick={closeAuth}
                style={{
                  position: 'absolute',
                  top: '16px',
                  right: '16px',
                  backgroundColor: 'transparent',
                  border: 'none',
                  color: 'rgba(255,255,255,0.7)',
                  cursor: 'pointer',
                  padding: '8px'
                }}
              >
                <X style={{ width: '24px', height: '24px' }} />
              </button>
              
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '24px' }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  backgroundColor: '#d4af37',
                  borderRadius: '4px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: '16px'
                }}>
                  <Building2 style={{ width: '24px', height: '24px', color: '#0f172a' }} />
                </div>
                <div>
                  <h2 style={{
                    fontSize: '24px',
                    fontFamily: "'Playfair Display', serif",
                    fontWeight: '600',
                    margin: '0 0 4px 0'
                  }}>
                    My Murivest
                  </h2>
                  <p style={{ 
                    color: '#d4af37', 
                    fontSize: '14px', 
                    margin: '0',
                    letterSpacing: '0.05em'
                  }}>
                    Private Client Portal
                  </p>
                </div>
              </div>
              
              <div style={{
                backgroundColor: 'rgba(255,255,255,0.1)',
                borderRadius: '4px',
                padding: '4px',
                display: 'flex'
              }}>
                <button
                  onClick={() => setIsLogin(true)}
                  style={{
                    flex: '1',
                    padding: '12px 24px',
                    borderRadius: '4px',
                    border: 'none',
                    backgroundColor: isLogin ? '#d4af37' : 'transparent',
                    color: isLogin ? '#0f172a' : 'rgba(255,255,255,0.7)',
                    fontFamily: "'Crimson Text', serif",
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                >
                  Login
                </button>
                <button
                  onClick={() => setIsLogin(false)}
                  style={{
                    flex: '1',
                    padding: '12px 24px',
                    borderRadius: '4px',
                    border: 'none',
                    backgroundColor: !isLogin ? '#d4af37' : 'transparent',
                    color: !isLogin ? '#0f172a' : 'rgba(255,255,255,0.7)',
                    fontFamily: "'Crimson Text', serif",
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                >
                  Register
                </button>
              </div>
            </div>

            {/* Form */}
            <div style={{ padding: '32px' }}>
              <div style={{ marginBottom: '24px' }}>
                {!isLogin && (
                  <div style={{ marginBottom: '20px' }}>
                    <label style={{
                      display: 'block',
                      fontSize: '14px',
                      fontWeight: '600',
                      color: '#374151',
                      marginBottom: '8px'
                    }}>
                      Full Name
                    </label>
                    <div style={{ position: 'relative' }}>
                      <User style={{
                        position: 'absolute',
                        left: '12px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        width: '20px',
                        height: '20px',
                        color: '#9CA3AF'
                      }} />
                      <input
                        type="text"
                        placeholder="Enter your full name"
                        style={{
                          width: '100%',
                          padding: '12px 12px 12px 44px',
                          border: '2px solid #E5E7EB',
                          borderRadius: '4px',
                          fontSize: '16px',
                          fontFamily: "'Crimson Text', serif",
                          outline: 'none',
                          transition: 'border-color 0.3s ease'
                        }}
                        onFocus={(e) => e.target.style.borderColor = '#d4af37'}
                        onBlur={(e) => e.target.style.borderColor = '#E5E7EB'}
                      />
                    </div>
                  </div>
                )}

                <div style={{ marginBottom: '20px' }}>
                  <label style={{
                    display: 'block',
                    fontSize: '14px',
                    fontWeight: '600',
                    color: '#374151',
                    marginBottom: '8px'
                  }}>
                    Email Address
                  </label>
                  <div style={{ position: 'relative' }}>
                    <Mail style={{
                      position: 'absolute',
                      left: '12px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      width: '20px',
                      height: '20px',
                      color: '#9CA3AF'
                    }} />
                    <input
                      type="email"
                      placeholder="Enter your email"
                      style={{
                        width: '100%',
                        padding: '12px 12px 12px 44px',
                        border: '2px solid #E5E7EB',
                        borderRadius: '4px',
                        fontSize: '16px',
                        fontFamily: "'Crimson Text', serif",
                        outline: 'none',
                        transition: 'border-color 0.3s ease'
                      }}
                      onFocus={(e) => e.target.style.borderColor = '#d4af37'}
                      onBlur={(e) => e.target.style.borderColor = '#E5E7EB'}
                    />
                  </div>
                </div>

                <div style={{ marginBottom: !isLogin ? '20px' : '0' }}>
                  <label style={{
                    display: 'block',
                    fontSize: '14px',
                    fontWeight: '600',
                    color: '#374151',
                    marginBottom: '8px'
                  }}>
                    Password
                  </label>
                  <div style={{ position: 'relative' }}>
                    <Lock style={{
                      position: 'absolute',
                      left: '12px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      width: '20px',
                      height: '20px',
                      color: '#9CA3AF'
                    }} />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Enter your password"
                      style={{
                        width: '100%',
                        padding: '12px 44px 12px 44px',
                        border: '2px solid #E5E7EB',
                        borderRadius: '4px',
                        fontSize: '16px',
                        fontFamily: "'Crimson Text', serif",
                        outline: 'none',
                        transition: 'border-color 0.3s ease'
                      }}
                      onFocus={(e) => e.target.style.borderColor = '#d4af37'}
                      onBlur={(e) => e.target.style.borderColor = '#E5E7EB'}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      style={{
                        position: 'absolute',
                        right: '12px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        backgroundColor: 'transparent',
                        border: 'none',
                        color: '#9CA3AF',
                        cursor: 'pointer'
                      }}
                    >
                      {showPassword ? <EyeOff style={{ width: '20px', height: '20px' }} /> : <Eye style={{ width: '20px', height: '20px' }} />}
                    </button>
                  </div>
                </div>

                {!isLogin && (
                  <div>
                    <label style={{
                      display: 'block',
                      fontSize: '14px',
                      fontWeight: '600',
                      color: '#374151',
                      marginBottom: '8px'
                    }}>
                      Confirm Password
                    </label>
                    <div style={{ position: 'relative' }}>
                      <Lock style={{
                        position: 'absolute',
                        left: '12px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        width: '20px',
                        height: '20px',
                        color: '#9CA3AF'
                      }} />
                      <input
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Confirm your password"
                        style={{
                          width: '100%',
                          padding: '12px 12px 12px 44px',
                          border: '2px solid #E5E7EB',
                          borderRadius: '4px',
                          fontSize: '16px',
                          fontFamily: "'Crimson Text', serif",
                          outline: 'none',
                          transition: 'border-color 0.3s ease'
                        }}
                        onFocus={(e) => e.target.style.borderColor = '#d4af37'}
                        onBlur={(e) => e.target.style.borderColor = '#E5E7EB'}
                      />
                    </div>
                  </div>
                )}
              </div>

              <button
                style={{
                  width: '100%',
                  backgroundColor: '#d4af37',
                  color: '#0f172a',
                  padding: '16px',
                  border: 'none',
                  borderRadius: '4px',
                  fontSize: '18px',
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#c19b26'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#d4af37'}
              >
                {isLogin ? 'Access Private Portal' : 'Create Account'}
              </button>

              {isLogin && (
                <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '16px' }}>
                  <button
                    style={{
                      backgroundColor: 'transparent',
                      border: 'none',
                      color: '#d4af37',
                      fontSize: '14px',
                      cursor: 'pointer',
                      fontFamily: "'Crimson Text', serif"
                    }}
                  >
                    Forgot Password?
                  </button>
                </div>
              )}

              <div style={{ marginTop: '24px', textAlign: 'center' }}>
                <p style={{ 
                  color: '#6B7280', 
                  fontSize: '14px',
                  fontFamily: "'Crimson Text', serif"
                }}>
                  {isLogin ? "Don't have an account? " : "Already have an account? "}
                  <button
                    onClick={() => setIsLogin(!isLogin)}
                    style={{
                      backgroundColor: 'transparent',
                      border: 'none',
                      color: '#d4af37',
                      fontWeight: '600',
                      cursor: 'pointer',
                      fontFamily: "'Crimson Text', serif"
                    }}
                  >
                    {isLogin ? 'Register here' : 'Login here'}
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Contact Form Modal */}
      {showContactForm && (
        <div style={{
          position: 'fixed',
          inset: '0',
          backgroundColor: 'rgba(0,0,0,0.75)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: '1000',
          backdropFilter: 'blur(4px)'
        }}>
          <div style={{
            backgroundColor: 'white',
            padding: '48px',
            maxWidth: '600px',
            width: '90%',
            borderRadius: '2px',
            boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '32px' }}>
              <h3 style={{
                fontSize: '32px',
                color: '#1a1a1a',
                fontFamily: "'Playfair Display', serif",
                fontWeight: '300',
                margin: '0'
              }}>
                Request Private Consultation
              </h3>
              <button
                onClick={() => setShowContactForm(false)}
                style={{
                  backgroundColor: 'transparent',
                  border: 'none',
                  color: '#666',
                  cursor: 'pointer',
                  padding: '8px'
                }}
              >
                <X style={{ width: '24px', height: '24px' }} />
              </button>
            </div>
            
            <div style={{ marginBottom: '32px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
                <input 
                  type="text" 
                  placeholder="First Name"
                  style={{
                    width: '100%',
                    padding: '16px',
                    border: '2px solid #e5e5e5',
                    fontSize: '16px',
                    fontFamily: "'Crimson Text', serif",
                    outline: 'none'
                  }}
                />
                <input 
                  type="text" 
                  placeholder="Last Name"
                  style={{
                    width: '100%',
                    padding: '16px',
                    border: '2px solid #e5e5e5',
                    fontSize: '16px',
                    fontFamily: "'Crimson Text', serif",
                    outline: 'none'
                  }}
                />
              </div>
              
              <input 
                type="email" 
                placeholder="Email Address"
                style={{
                  width: '100%',
                  padding: '16px',
                  marginBottom: '20px',
                  border: '2px solid #e5e5e5',
                  fontSize: '16px',
                  fontFamily: "'Crimson Text', serif",
                  outline: 'none'
                }}
              />
              
              <input 
                type="tel" 
                placeholder="Phone Number"
                style={{
                  width: '100%',
                  padding: '16px',
                  marginBottom: '20px',
                  border: '2px solid #e5e5e5',
                  fontSize: '16px',
                  fontFamily: "'Crimson Text', serif",
                  outline: 'none'
                }}
              />
              
              <select
                style={{
                  width: '100%',
                  padding: '16px',
                  marginBottom: '20px',
                  border: '2px solid #e5e5e5',
                  fontSize: '16px',
                  fontFamily: "'Crimson Text', serif",
                  outline: 'none',
                  backgroundColor: 'white'
                }}
              >
                <option>Select Investment Interest Level</option>
                <option>$1M - $2.5M</option>
                <option>$2.5M - $5M</option>
                <option>$5M - $10M</option>
                <option>$10M+</option>
              </select>
              
              <textarea
                placeholder="Tell us about your investment objectives and timeline..."
                rows={4}
                style={{
                  width: '100%',
                  padding: '16px',
                  border: '2px solid #e5e5e5',
                  fontSize: '16px',
                  fontFamily: "'Crimson Text', serif",
                  outline: 'none',
                  resize: 'vertical'
                }}
              />
            </div>
            
            <div style={{
              display: 'flex',
              gap: '16px',
              justifyContent: 'flex-end'
            }}>
              <button
                onClick={() => setShowContactForm(false)}
                style={{
                  backgroundColor: '#666',
                  color: 'white',
                  padding: '16px 32px',
                  border: 'none',
                  cursor: 'pointer',
                  fontFamily: "'Playfair Display', serif",
                  fontSize: '16px'
                }}
              >
                Cancel
              </button>
              <button
                style={{
                  backgroundColor: '#d4af37',
                  color: '#1a1a1a',
                  padding: '16px 32px',
                  border: 'none',
                  cursor: 'pointer',
                  fontFamily: "'Playfair Display', serif",
                  fontSize: '16px',
                  fontWeight: '600'
                }}
              >
                Schedule Private Consultation
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InvestorPage;