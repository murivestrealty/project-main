import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Star, 
  Send, 
  X, 
  User, 
  Mail, 
  Briefcase, 
  MessageSquare,
  DollarSign,
  CheckCircle,
  AlertCircle,
  Loader
} from 'lucide-react';
import { submitReview, validateReviewData } from '../services/reviewService';
import type { ReviewData } from '../types/review';

interface ReviewFormProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess?: () => void;
}

const ReviewForm: React.FC<ReviewFormProps> = ({ isOpen, onClose, onSuccess }) => {
  const [formData, setFormData] = useState<ReviewData>({
    name: '',
    title: '',
    email: '',
    content: '',
    rating: 0,
    investment: ''
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);
  const [hoverRating, setHoverRating] = useState(0);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleRatingClick = (rating: number) => {
    setFormData(prev => ({ ...prev, rating }));
    if (errors.rating) {
      setErrors(prev => ({ ...prev, rating: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form data
    const validation = validateReviewData(formData);
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    try {
      const result = await submitReview(formData);
      
      if (result.success) {
        setSubmitStatus('success');
        // Reset form after successful submission
        setTimeout(() => {
          setFormData({
            name: '',
            title: '',
            email: '',
            content: '',
            rating: 0,
            investment: ''
          });
          setSubmitStatus(null);
          if (onSuccess) {
            onSuccess();
          }
          onClose();
        }, 2000);
      } else {
        setSubmitStatus('error');
        setErrors({ submit: result.error || 'Failed to submit review. Please try again.' });
      }
    } catch (error) {
      setSubmitStatus('error');
      setErrors({ submit: 'An unexpected error occurred. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      title: '',
      email: '',
      content: '',
      rating: 0,
      investment: ''
    });
    setErrors({});
    setSubmitStatus(null);
    setHoverRating(0);
  };

  const handleClose = () => {
    resetForm();
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={handleClose}
      >
        <motion.div
          className="relative bg-gradient-to-br from-slate-900 via-blue-950 to-slate-800 rounded-3xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-white/20"
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <motion.button
            onClick={handleClose}
            className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <X className="h-6 w-6" />
          </motion.button>

          {/* Header */}
          <motion.div 
            className="text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <motion.div
              className="inline-block mb-4"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.8 }}
            >
              <MessageSquare className="h-12 w-12 text-amber-400 mx-auto" />
            </motion.div>
            <h2 className="text-3xl font-bold text-white mb-2">Share Your Experience</h2>
            <p className="text-gray-300">Help others discover the value of working with Murivest</p>
          </motion.div>

          {/* Success/Error Messages */}
          <AnimatePresence>
            {submitStatus === 'success' && (
              <motion.div
                className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-2xl flex items-center"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                <div>
                  <p className="text-green-400 font-semibold">Review Submitted Successfully!</p>
                  <p className="text-green-300 text-sm">Your review will be published after moderation.</p>
                </div>
              </motion.div>
            )}

            {submitStatus === 'error' && errors.submit && (
              <motion.div
                className="mb-6 p-4 bg-red-500/20 border border-red-500/30 rounded-2xl flex items-center"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                <AlertCircle className="h-5 w-5 text-red-400 mr-3" />
                <div>
                  <p className="text-red-400 font-semibold">Submission Failed</p>
                  <p className="text-red-300 text-sm">{errors.submit}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name and Title Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <label className="block text-white font-semibold mb-2">
                  <User className="inline h-4 w-4 mr-2" />
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 bg-white/10 border ${
                    errors.name ? 'border-red-500' : 'border-white/20'
                  } rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-amber-400 transition-colors`}
                  placeholder="Enter your full name"
                />
                {errors.name && (
                  <p className="text-red-400 text-sm mt-1">{errors.name}</p>
                )}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <label className="block text-white font-semibold mb-2">
                  <Briefcase className="inline h-4 w-4 mr-2" />
                  Professional Title *
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 bg-white/10 border ${
                    errors.title ? 'border-red-500' : 'border-white/20'
                  } rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-amber-400 transition-colors`}
                  placeholder="e.g., Real Estate Investor"
                />
                {errors.title && (
                  <p className="text-red-400 text-sm mt-1">{errors.title}</p>
                )}
              </motion.div>
            </div>

            {/* Email */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <label className="block text-white font-semibold mb-2">
                <Mail className="inline h-4 w-4 mr-2" />
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 bg-white/10 border ${
                  errors.email ? 'border-red-500' : 'border-white/20'
                } rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-amber-400 transition-colors`}
                placeholder="your.email@example.com"
              />
              <p className="text-gray-400 text-xs mt-1">Your email will not be displayed publicly</p>
              {errors.email && (
                <p className="text-red-400 text-sm mt-1">{errors.email}</p>
              )}
            </motion.div>

            {/* Rating */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <label className="block text-white font-semibold mb-3">
                Rating *
              </label>
              <div className="flex items-center space-x-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <motion.button
                    key={star}
                    type="button"
                    onClick={() => handleRatingClick(star)}
                    onMouseEnter={() => setHoverRating(star)}
                    onMouseLeave={() => setHoverRating(0)}
                    className="focus:outline-none"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Star
                      className={`h-8 w-8 transition-colors ${
                        star <= (hoverRating || formData.rating)
                          ? 'text-amber-400 fill-current'
                          : 'text-gray-400'
                      }`}
                    />
                  </motion.button>
                ))}
                <span className="text-gray-300 ml-4">
                  {formData.rating > 0 && `${formData.rating} star${formData.rating > 1 ? 's' : ''}`}
                </span>
              </div>
              {errors.rating && (
                <p className="text-red-400 text-sm mt-1">{errors.rating}</p>
              )}
            </motion.div>

            {/* Review Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <label className="block text-white font-semibold mb-2">
                <MessageSquare className="inline h-4 w-4 mr-2" />
                Your Review *
              </label>
              <textarea
                name="content"
                value={formData.content}
                onChange={handleInputChange}
                rows={5}
                className={`w-full px-4 py-3 bg-white/10 border ${
                  errors.content ? 'border-red-500' : 'border-white/20'
                } rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-amber-400 transition-colors resize-none`}
                placeholder="Share your experience with Murivest. What made your investment journey successful? (minimum 50 characters)"
              />
              <div className="flex justify-between items-center mt-1">
                <span className="text-xs text-gray-400">
                  {formData.content.length}/50 minimum characters
                </span>
                {errors.content && (
                  <p className="text-red-400 text-sm">{errors.content}</p>
                )}
              </div>
            </motion.div>

            {/* Investment Details (Optional) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <label className="block text-white font-semibold mb-2">
                <DollarSign className="inline h-4 w-4 mr-2" />
                Investment Details (Optional)
              </label>
              <input
                type="text"
                name="investment"
                value={formData.investment || ''}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-amber-400 transition-colors"
                placeholder="e.g., Commercial Portfolio - KSh 25M"
              />
              <p className="text-gray-400 text-xs mt-1">Optional: Brief description of your investment</p>
            </motion.div>

            {/* Submit Button */}
            <motion.div
              className="pt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <motion.button
                type="submit"
                disabled={isSubmitting || submitStatus === 'success'}
                className={`w-full py-4 px-6 rounded-2xl font-semibold text-lg transition-all duration-300 ${
                  isSubmitting || submitStatus === 'success'
                    ? 'bg-gray-600 cursor-not-allowed'
                    : 'bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 shadow-2xl'
                } text-white flex items-center justify-center`}
                whileHover={!isSubmitting && submitStatus !== 'success' ? { scale: 1.02 } : {}}
                whileTap={!isSubmitting && submitStatus !== 'success' ? { scale: 0.98 } : {}}
              >
                {isSubmitting ? (
                  <>
                    <Loader className="animate-spin h-5 w-5 mr-2" />
                    Submitting Review...
                  </>
                ) : submitStatus === 'success' ? (
                  <>
                    <CheckCircle className="h-5 w-5 mr-2" />
                    Review Submitted!
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5 mr-2" />
                    Submit Review
                  </>
                )}
              </motion.button>
            </motion.div>
          </form>

          {/* Disclaimer */}
          <motion.div
            className="mt-6 p-4 bg-white/5 rounded-2xl border border-white/10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            <p className="text-gray-400 text-sm text-center">
              <strong>Important:</strong> Your review will be moderated before publication to ensure quality and authenticity.
              We typically review submissions within 24-48 hours. Once approved by an admin in Firebase, 
              your review will appear on the website automatically.
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ReviewForm;