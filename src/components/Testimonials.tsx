import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, Users, Sparkles, Plus } from 'lucide-react';
import ReviewForm from './ReviewForm';
import { getApprovedReviews, subscribeToApprovedReviews } from '../services/reviewService';
import type { StoredReview } from '../types/review';

interface Testimonial {
  id: number | string;
  name: string;
  title: string;
  image: string;
  content: string;
  rating: number;
  investment: string;
}

const Testimonials = () => {
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [dynamicReviews, setDynamicReviews] = useState<StoredReview[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "James Mwangi",
      title: "Investor, Nairobi",
      image:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      content:
        "Murivest helped me secure prime investments that exceeded my expectations.",
      rating: 5,
      investment: "Real Estate Portfolio",
    },
    {
      id: 2,
      name: "Sophia Kimani",
      title: "Entrepreneur",
      image:
        "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      content:
        "Transparent process and excellent returns. Highly recommend Murivest Realty.",
      rating: 4,
      investment: "Commercial Properties",
    },
  ];

  // Load approved reviews from Firebase
  useEffect(() => {
    const loadReviews = async () => {
      setLoading(true);
      setError(null);
      try {
        const reviews = await getApprovedReviews();
        console.log('Loaded reviews:', reviews); // Debug log
        setDynamicReviews(reviews);
      } catch (error) {
        console.error("Error loading reviews:", error);
        setError("Failed to load reviews");
      } finally {
        setLoading(false);
      }
    };

    loadReviews();

    // Set up real-time listener for approved reviews
    const unsubscribe = subscribeToApprovedReviews((reviews) => {
      console.log('Real-time reviews update:', reviews); // Debug log
      setDynamicReviews(reviews);
      setLoading(false);
    });

    return () => {
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, []);

  // Handle successful review submission
  const handleReviewSubmitted = () => {
    // Refresh reviews after submission
    const loadReviews = async () => {
      try {
        const reviews = await getApprovedReviews();
        setDynamicReviews(reviews);
      } catch (error) {
        console.error("Error reloading reviews:", error);
      }
    };
    loadReviews();
  };

  // Merge static + dynamic
  const allTestimonials: Testimonial[] = [
    ...testimonials,
    ...dynamicReviews.map((review) => ({
      id: `dynamic-${review.id}`,
      name: review.name,
      title: review.title,
      image:
        review.image ||
        "https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      content: review.content,
      rating: review.rating,
      investment: review.investment || "Investment Portfolio",
    })),
  ];

  return (
    <section className="relative py-20 bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        {/* Heading */}
        <motion.div
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.h2 className="text-4xl md:text-5xl font-bold text-amber-400">
            Investor Testimonials
          </motion.h2>
          <motion.p
            className="mt-4 text-gray-300 text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Discover why discerning investors trust Murivest with their
            wealth-building journey
          </motion.p>

          {/* Add Review Button */}
          <motion.div
            className="mt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <motion.button
              onClick={() => setShowReviewForm(true)}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-amber-500/20 to-orange-500/20 backdrop-blur-sm border border-amber-400/30 rounded-2xl text-amber-400 font-semibold hover:from-amber-500/30 hover:to-orange-500/30 transition-all duration-300"
              whileHover={{
                scale: 1.05,
                boxShadow:
                  "0 20px 40px -12px rgba(251, 191, 36, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Plus className="h-5 w-5 mr-2" />
              Share Your Experience
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Testimonials */}
        {loading ? (
          <motion.div
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-amber-400"></div>
            <p className="text-gray-300 mt-4">
              Loading testimonials...
            </p>
          </motion.div>
        ) : error ? (
          <motion.div
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <p className="text-red-400 mb-4">{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Retry
            </button>
          </motion.div>
        ) : allTestimonials.length === 0 ? (
          <motion.div
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <p className="text-gray-300 mb-4">No testimonials available yet.</p>
            <p className="text-gray-400 text-sm">Be the first to share your experience!</p>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allTestimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                className="relative bg-gray-900/50 p-8 rounded-2xl border border-gray-800 backdrop-blur-sm hover:border-amber-400/30 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover border border-gray-700"
                  />
                  <div>
                    <h4 className="text-lg font-semibold text-white">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-400 text-sm">
                      {testimonial.title}
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-gray-300">{testimonial.content}</p>
                <div className="flex items-center mt-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-amber-400 fill-amber-400"
                    />
                  ))}
                </div>

                {/* Investment badge */}
                {testimonial.investment && (
                  <motion.div
                    className="absolute top-4 right-4 bg-amber-500/10 text-amber-400 text-xs font-medium px-3 py-1 rounded-full border border-amber-400/20"
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.4 }}
                    viewport={{ once: true }}
                  >
                    {testimonial.investment}
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        )}
        {/* Debug Info (remove in production) */}
        {process.env.NODE_ENV === 'development' && (
          <div className="mt-8 p-4 bg-gray-800 rounded-lg text-sm text-gray-300">
            <p>Debug Info:</p>
            <p>Static testimonials: {testimonials.length}</p>
            <p>Dynamic reviews: {dynamicReviews.length}</p>
            <p>Total testimonials: {allTestimonials.length}</p>
            <p>Loading: {loading.toString()}</p>
            <p>Error: {error || 'None'}</p>
          </div>
        )}
      </div>

      {/* Review Form Modal */}
      <ReviewForm
        isOpen={showReviewForm}
        onClose={() => setShowReviewForm(false)}
        onSuccess={handleReviewSubmitted}
      />
    </section>
  );
};

export default Testimonials;
