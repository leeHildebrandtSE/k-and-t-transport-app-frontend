import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  Platform,
  Animated,
  Pressable,
  Image,
} from 'react-native';
import { Video, ResizeMode } from 'expo-av';
import {
  Button,
  Card,
  IconButton,
  Chip,
  Surface,
} from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

import { colors, typography, spacing, borderRadius, shadows, animations, effects, landingPageStyles } from '../styles';

interface LandingPageProps {
  onLogin: () => void;
  onSignup: () => void;
}

const { width, height } = Dimensions.get('window');

const LandingPage: React.FC<LandingPageProps> = ({ onLogin, onSignup }) => {
  const navigation = useNavigation();
  const [scrollY] = useState(new Animated.Value(0));
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const scrollViewRef = useRef<ScrollView>(null);

  // Animation values
  const fadeAnim = useState(new Animated.Value(0))[0];
  const slideAnim = useState(new Animated.Value(50))[0];

  // Section refs and positions for scroll-to functionality
  const sectionRefs = {
    home: useRef<View>(null),
    features: useRef<View>(null),
    services: useRef<View>(null),
    about: useRef<View>(null),
    contact: useRef<View>(null),
  };

  const [sectionPositions, setSectionPositions] = useState({
    home: 0,
    features: 0,
    services: 0,
    about: 0,
    contact: 0,
  });

  const updateSectionPosition = (sectionName: keyof typeof sectionPositions, y: number) => {
    console.log(`Section ${sectionName} positioned at y: ${y}`);
    setSectionPositions(prev => ({
      ...prev,
      [sectionName]: y
    }));
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const scrollToSection = (sectionName: keyof typeof sectionPositions) => {
    console.log(`🔗 Navigation: Attempting to scroll to "${sectionName}"`);
    console.log('📍 Current section positions:', sectionPositions);

    setActiveSection(sectionName);
    setMobileMenuOpen(false); // Close mobile menu when navigating

    // Special handling for home section - always scroll to top
    if (sectionName === 'home') {
      console.log('🏠 Scrolling to home (top of page)');

      // For web: Use native browser scrolling (more reliable)
      if (Platform.OS === 'web') {
        try {
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
          console.log('✅ Native browser scroll to top executed successfully');
          return;
        } catch (webError) {
          console.error('❌ Native browser scroll failed:', webError);
        }
      }

      // Fallback: React Native ScrollView method
      if (scrollViewRef.current) {
        scrollViewRef.current.scrollTo({
          y: 0,
          animated: true,
        });
      }
      return;
    }

    // Ensure we have a scroll view reference for other sections
    if (!scrollViewRef.current) {
      console.error('❌ ScrollView ref not available');
      return;
    }

    let targetY = sectionPositions[sectionName];

    // Try to measure the section position directly if not already measured
    if (targetY === 0) {
      const sectionRef = sectionRefs[sectionName];
      if (sectionRef.current) {
        console.log(`📏 Measuring ${sectionName} section directly...`);
        sectionRef.current.measure((x, y, width, height, pageX, pageY) => {
          console.log(`📐 Direct measurement for ${sectionName}: pageY=${pageY}, height=${height}`);
          const scrollY = Math.max(0, pageY - 80); // Account for navbar height (80px)
          scrollViewRef.current?.scrollTo({
            y: scrollY,
            animated: true,
          });
        });
        return; // Exit early since we're using direct measurement
      }
    }

    // Enhanced fallback to estimated positions if not measured yet
    if (targetY === 0) {
      const fallbackPositions = {
        home: 0,
        features: height * 0.85, // Account for hero section
        services: height * 1.7,
        about: height * 2.5,
        contact: height * 3.3,
      };
      targetY = fallbackPositions[sectionName];
      console.log(`🎯 Using fallback position for ${sectionName}: ${targetY}`);
    }

    console.log(`✅ Scrolling to ${sectionName} at position ${targetY}`);

    // For web: Use native browser scrolling first (more reliable than React Native Web)
    if (Platform.OS === 'web') {
      console.log('🌐 Using native browser scroll for web...');
      try {
        window.scrollTo({
          top: Math.max(0, targetY - 80),
          behavior: 'smooth'
        });
        console.log('✅ Native browser scroll executed successfully');
        return; // Exit early if successful
      } catch (webError) {
        console.error('❌ Native browser scroll failed:', webError);
      }
    }

    // Fallback: React Native ScrollView method (for native platforms or if browser scroll fails)
    try {
      console.log('🔄 Trying React Native ScrollView method...');
      scrollViewRef.current.scrollTo({
        y: Math.max(0, targetY - 80), // Account for navbar height (80px)
        animated: true,
      });
      console.log('✅ React Native scroll executed');
    } catch (error) {
      console.error('❌ React Native scroll also failed:', error);

      // Last resort: instant browser scroll (no animation)
      if (Platform.OS === 'web') {
        console.log('🆘 Last resort: instant browser scroll...');
        window.scrollTo(0, Math.max(0, targetY - 80));
      }
    }
  };

  useEffect(() => {
    // Animate in on mount
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: animations.slow,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: animations.slow,
        useNativeDriver: true,
      }),
    ]).start();

    // Initial section positions will be set by onLayout handlers
  }, []);

  // Update active section based on scroll position
  useEffect(() => {
    const listener = scrollY.addListener(({ value }) => {
      const sections = Object.entries(sectionPositions);
      for (let i = sections.length - 1; i >= 0; i--) {
        const [sectionName, position] = sections[i];
        if (value >= position - 100) { // 100px offset for better UX
          setActiveSection(sectionName);
          break;
        }
      }
    });

    return () => {
      scrollY.removeListener(listener);
    };
  }, [sectionPositions]);

  const NavigationBar = () => (
    <Surface style={landingPageStyles.navbar} elevation={2}>
      <View style={landingPageStyles.navContent}>
        {/* Logo */}
        <View style={landingPageStyles.logoContainer}>
          <View style={landingPageStyles.logoIcon}>
            <Text style={landingPageStyles.logoText}>K&T</Text>
          </View>
          <Text style={landingPageStyles.logoTitle}>Transport</Text>
        </View>

        {/* Desktop Navigation */}
        {Platform.OS === 'web' && width > 768 && (
          <View style={landingPageStyles.navLinks}>
            {['Home', 'Features', 'Services', 'About', 'Contact'].map((item) => (
              <Pressable
                key={item}
                style={[
                  landingPageStyles.navLink,
                  activeSection === item.toLowerCase() && landingPageStyles.navLinkActive
                ]}
                onPress={() => {
                  console.log(`🖱️ Desktop navbar click: ${item}`);
                  scrollToSection(item.toLowerCase() as keyof typeof sectionPositions);
                }}
              >
                <Text style={[
                  landingPageStyles.navLinkText,
                  activeSection === item.toLowerCase() && landingPageStyles.navLinkTextActive
                ]}>
                  {item}
                </Text>
              </Pressable>
            ))}
          </View>
        )}

        {/* Mobile Menu Button */}
        {(Platform.OS !== 'web' || width <= 768) && (
          <IconButton
            icon={mobileMenuOpen ? 'close' : 'menu'}
            size={24}
            onPress={toggleMobileMenu}
            style={landingPageStyles.mobileMenuButton}
          />
        )}

        {/* Desktop Auth Buttons */}
        {Platform.OS === 'web' && width > 768 && (
          <View style={landingPageStyles.authButtons}>
            <Button
              mode="outlined"
              onPress={onLogin}
              style={landingPageStyles.loginButton}
              labelStyle={landingPageStyles.loginButtonText}
            >
              Sign In
            </Button>
            <Button
              mode="contained"
              onPress={onSignup}
              style={landingPageStyles.signupButton}
              labelStyle={landingPageStyles.signupButtonText}
            >
              Get Started
            </Button>
          </View>
        )}
      </View>

      {/* Mobile Navigation Menu */}
      {(Platform.OS !== 'web' || width <= 768) && mobileMenuOpen && (
        <Surface style={landingPageStyles.mobileMenu} elevation={4}>
          <View style={landingPageStyles.mobileMenuContent}>
            {['Home', 'Features', 'Services', 'About', 'Contact'].map((item) => (
              <Pressable
                key={item}
                style={[
                  landingPageStyles.mobileNavLink,
                  activeSection === item.toLowerCase() && landingPageStyles.mobileNavLinkActive
                ]}
                onPress={() => {
                  console.log(`📱 Mobile navbar click: ${item}`);
                  scrollToSection(item.toLowerCase() as keyof typeof sectionPositions);
                }}
              >
                <Text style={[
                  landingPageStyles.mobileNavLinkText,
                  activeSection === item.toLowerCase() && landingPageStyles.mobileNavLinkTextActive
                ]}>
                  {item}
                </Text>
              </Pressable>
            ))}

            {/* Mobile Auth Buttons */}
            <View style={landingPageStyles.mobileAuthButtons}>
              <Button
                mode="outlined"
                onPress={onLogin}
                style={landingPageStyles.mobileLoginButton}
                labelStyle={landingPageStyles.mobileLoginButtonText}
              >
                Sign In
              </Button>
              <Button
                mode="contained"
                onPress={onSignup}
                style={landingPageStyles.mobileSignupButton}
                labelStyle={landingPageStyles.mobileSignupButtonText}
              >
                Get Started
              </Button>
            </View>
          </View>
        </Surface>
      )}
    </Surface>
  );

  const HeroSection = () => (
    <View style={landingPageStyles.heroContainer}>
      <LinearGradient
        colors={colors.gradientHero}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={landingPageStyles.heroGradient}
      >
        {/* Hero Background Video */}
        <View style={landingPageStyles.heroBackgroundVideoContainer}>
          <Video
            source={require('../../assets/hero-video.mp4')}
            style={landingPageStyles.heroBackgroundVideo}
            shouldPlay={true}
            isLooping={true}
            isMuted={true}
            resizeMode={ResizeMode.COVER}
            onError={(error: string) => console.warn('Video error:', error)}
          />
          {/* Video Overlay for opacity control */}
          <View style={landingPageStyles.videoOverlay} />
        </View>

        {/* Fallback Vehicle Silhouette (hidden by default, can be used as backup) */}
        <View style={[landingPageStyles.heroBackgroundImageContainer, { opacity: 0 }]}>
          <View style={landingPageStyles.heroBackgroundVehicle}>
            {/* Stylized Vehicle Silhouette for Renault Sandero Stepway */}
            <View style={landingPageStyles.vehicleSilhouette}>
              {/* Vehicle Body */}
              <View style={landingPageStyles.vehicleBody}>
                <View style={landingPageStyles.vehicleRoof} />
                <View style={landingPageStyles.vehicleDoor1} />
                <View style={landingPageStyles.vehicleDoor2} />
                <View style={landingPageStyles.vehicleWindow1} />
                <View style={landingPageStyles.vehicleWindow2} />
              </View>

              {/* Vehicle Wheels */}
              <View style={landingPageStyles.vehicleWheels}>
                <View style={landingPageStyles.vehicleWheel} />
                <View style={landingPageStyles.vehicleWheel} />
              </View>

              {/* Vehicle Details */}
              <View style={landingPageStyles.vehicleDetails}>
                <View style={landingPageStyles.vehicleHeadlight} />
                <View style={landingPageStyles.vehicleGrille} />
              </View>
            </View>

            {/* Brand Badge */}
            <View style={landingPageStyles.vehicleBadge}>
              <Text style={landingPageStyles.vehicleBrandText}>Renault</Text>
              <Text style={landingPageStyles.vehicleModelText}>Sandero Stepway</Text>
            </View>
          </View>
        </View>

        <Animated.View
          style={[
            landingPageStyles.heroContent,
            {
              opacity: fadeAnim,
              transform: [{ translateY: slideAnim }]
            }
          ]}
        >
          {/* Hero Text */}
          <View style={landingPageStyles.heroTextContainer}>
            <Text style={landingPageStyles.heroTitle}>
              Premium Transport{'\n'}
              <Text style={landingPageStyles.heroTitleAccent}>Made Simple</Text>
            </Text>
            <Text style={landingPageStyles.heroSubtitle}>
              Experience seamless, reliable, and professional transport services
              for schools, corporate staff, and daily commuters across Cape Town and the Western Cape.
              Based in Mitchell's Plain, personally managed by Mr. Taswill Heynes, Owner & CEO.
            </Text>

            {/* Hero CTAs */}
            <View style={landingPageStyles.heroCTAContainer}>
              <Button
                mode="contained"
                onPress={onSignup}
                style={landingPageStyles.primaryCTA}
                labelStyle={landingPageStyles.primaryCTAText}
                icon="rocket-launch"
              >
                Start Your Journey
              </Button>
              <Button
                mode="outlined"
                onPress={() => scrollToSection('features')}
                style={landingPageStyles.secondaryCTA}
                labelStyle={landingPageStyles.secondaryCTAText}
                icon="play-circle-outline"
              >
                Learn More
              </Button>
            </View>

            {/* Trust Indicators */}
            <View style={landingPageStyles.trustIndicators}>
              <View style={landingPageStyles.trustItem}>
                <Text style={landingPageStyles.trustNumber}>500+</Text>
                <Text style={landingPageStyles.trustLabel}>Happy Clients</Text>
              </View>
              <View style={landingPageStyles.trustItem}>
                <Text style={landingPageStyles.trustNumber}>50K+</Text>
                <Text style={landingPageStyles.trustLabel}>Safe Trips</Text>
              </View>
              <View style={landingPageStyles.trustItem}>
                <Text style={landingPageStyles.trustNumber}>99.9%</Text>
                <Text style={landingPageStyles.trustLabel}>Reliability</Text>
              </View>
            </View>
          </View>

          {/* Hero Visual */}
          <View style={landingPageStyles.heroVisual}>
            <View style={landingPageStyles.heroCard}>
              <View style={landingPageStyles.heroCardHeader}>
                <View style={landingPageStyles.heroCardDots}>
                  <View style={[landingPageStyles.dot, { backgroundColor: colors.error }]} />
                  <View style={[landingPageStyles.dot, { backgroundColor: colors.warning }]} />
                  <View style={[landingPageStyles.dot, { backgroundColor: colors.success }]} />
                </View>
              </View>
              <View style={landingPageStyles.heroCardContent}>
                <Text style={landingPageStyles.heroCardTitle}>Live Trip Tracking</Text>
                <View style={landingPageStyles.tripRoute}>
                  <View style={landingPageStyles.routePoint}>
                    <View style={landingPageStyles.routeIcon} />
                    <Text style={landingPageStyles.routeText}>Pickup: Bellville</Text>
                  </View>
                  <View style={landingPageStyles.routeLine} />
                  <View style={landingPageStyles.routePoint}>
                    <View style={landingPageStyles.routeIcon} />
                    <Text style={landingPageStyles.routeText}>Destination: CBD</Text>
                  </View>
                </View>
                <View style={landingPageStyles.tripStats}>
                  <Chip mode="outlined" style={landingPageStyles.statusChip}>On Time</Chip>
                  <Text style={landingPageStyles.etaText}>ETA: 8 mins</Text>
                </View>
              </View>
            </View>
          </View>
        </Animated.View>
      </LinearGradient>
    </View>
  );

  const FeaturesSection = () => (
    <View style={landingPageStyles.featuresContainer}>
      <View style={landingPageStyles.sectionHeader}>
        <Text style={landingPageStyles.sectionTitle}>Why Choose K&T Transport?</Text>
        <Text style={landingPageStyles.sectionSubtitle}>
          We deliver excellence in every journey with cutting-edge technology and premium service.
        </Text>
      </View>

      <View style={landingPageStyles.featuresGrid}>
        {[
          {
            icon: 'shield-check',
            title: 'Safety First',
            description: 'Professional drivers, GPS tracking, and comprehensive insurance coverage.',
            color: colors.success,
          },
          {
            icon: 'clock-time-four',
            title: 'Always On Time',
            description: 'Punctual service with real-time tracking and proactive notifications.',
            color: colors.info,
          },
          {
            icon: 'star',
            title: 'Premium Experience',
            description: 'Comfortable vehicles, courteous service, and attention to detail.',
            color: colors.secondary,
          },
          {
            icon: 'phone',
            title: '24/7 Support',
            description: 'Round-the-clock customer service for all your transport needs.',
            color: colors.tertiary,
          },
          {
            icon: 'map-marker-path',
            title: 'Smart Routing',
            description: 'AI-powered route optimization for fastest and safest journeys.',
            color: colors.primary,
          },
          {
            icon: 'account-group',
            title: 'Family Friendly',
            description: 'Special care for children and families with dedicated safety protocols.',
            color: colors.secondaryAccent,
          },
        ].map((feature, index) => (
          <Card key={index} style={landingPageStyles.featureCard}>
            <Card.Content style={landingPageStyles.featureCardContent}>
              <View style={[landingPageStyles.featureIcon, { backgroundColor: `${feature.color}15` }]}>
                <IconButton
                  icon={feature.icon}
                  size={32}
                  iconColor={feature.color}
                />
              </View>
              <Text style={landingPageStyles.featureTitle}>{feature.title}</Text>
              <Text style={landingPageStyles.featureDescription}>{feature.description}</Text>
            </Card.Content>
          </Card>
        ))}
      </View>
    </View>
  );

  const ServicesSection = () => (
    <View style={landingPageStyles.servicesContainer}>
      <View style={landingPageStyles.sectionHeader}>
        <Text style={landingPageStyles.sectionTitle}>Our Services</Text>
        <Text style={landingPageStyles.sectionSubtitle}>
          Comprehensive transport solutions tailored to your unique needs.
        </Text>
      </View>

      <View style={landingPageStyles.servicesGrid}>
        {[
          {
            title: 'School Transport',
            description: 'Safe and reliable daily transport for students with door-to-door service.',
            image: '🚌',
            features: ['GPS Tracking', 'Trained Drivers', 'Safety Protocols', 'Parent Updates'],
          },
          {
            title: 'Corporate Shuttle',
            description: 'Professional staff transport solutions for businesses of all sizes.',
            image: '🚐',
            features: ['Flexible Schedules', 'Multiple Routes', 'Cost Effective', 'Reliable Service'],
          },
          {
            title: 'Private Hire',
            description: 'Premium private transport for special events and personal needs.',
            image: '🚗',
            features: ['Luxury Vehicles', 'Professional Chauffeurs', 'Custom Routes', '24/7 Available'],
          },
        ].map((service, index) => (
          <Card key={index} style={landingPageStyles.serviceCard}>
            <Card.Content style={landingPageStyles.serviceCardContent}>
              <Text style={landingPageStyles.serviceEmoji}>{service.image}</Text>
              <Text style={landingPageStyles.serviceTitle}>{service.title}</Text>
              <Text style={landingPageStyles.serviceDescription}>{service.description}</Text>

              <View style={landingPageStyles.serviceFeatures}>
                {service.features.map((feature, idx) => (
                  <Chip
                    key={idx}
                    mode="outlined"
                    style={landingPageStyles.serviceFeatureChip}
                    textStyle={landingPageStyles.serviceFeatureText}
                  >
                    {feature}
                  </Chip>
                ))}
              </View>

              <Button
                mode="outlined"
                style={landingPageStyles.serviceButton}
                labelStyle={landingPageStyles.serviceButtonText}
                onPress={onSignup}
              >
                Learn More
              </Button>
            </Card.Content>
          </Card>
        ))}
      </View>
    </View>
  );

  const CTASection = () => (
    <LinearGradient
      colors={colors.gradientPrimary}
      style={landingPageStyles.ctaContainer}
    >
      <View style={landingPageStyles.ctaContent}>
        <Text style={landingPageStyles.ctaTitle}>Ready to Transform Your Commute?</Text>
        <Text style={landingPageStyles.ctaSubtitle}>
          Join thousands of satisfied customers who trust K&T Transport for their daily journeys.
        </Text>

        <View style={landingPageStyles.ctaButtons}>
          <Button
            mode="contained"
            onPress={onSignup}
            style={landingPageStyles.ctaPrimary}
            labelStyle={landingPageStyles.ctaPrimaryText}
            icon="rocket-launch"
          >
            Get Started Today
          </Button>
          <Button
            mode="outlined"
            onPress={onLogin}
            style={landingPageStyles.ctaSecondary}
            labelStyle={landingPageStyles.ctaSecondaryText}
          >
            Sign In
          </Button>
        </View>
      </View>
    </LinearGradient>
  );

  const AboutSection = () => (
    <View style={landingPageStyles.aboutContainer}>
      <View style={landingPageStyles.aboutContent}>
        <Text style={landingPageStyles.sectionTitle}>About K & T Transport</Text>
        <Text style={landingPageStyles.sectionSubtitle}>
          Based in Beacon Valley, Mitchell's Plain, we are your trusted partner for safe, reliable, and professional transport services throughout Cape Town and the Western Cape.
        </Text>

        <View style={landingPageStyles.aboutGrid}>
          <View style={landingPageStyles.aboutCard}>
            <View style={landingPageStyles.aboutIconContainer}>
              <IconButton
                icon="shield-check"
                size={32}
                iconColor={colors.primary}
                style={landingPageStyles.aboutIcon}
              />
            </View>
            <Text style={landingPageStyles.aboutCardTitle}>15+ Years Experience</Text>
            <Text style={landingPageStyles.aboutCardText}>
              Serving the Western Cape with dedication and professionalism since 2009.
            </Text>
          </View>

          <View style={landingPageStyles.aboutCard}>
            <View style={landingPageStyles.aboutIconContainer}>
              <IconButton
                icon="account-group"
                size={32}
                iconColor={colors.primary}
                style={landingPageStyles.aboutIcon}
              />
            </View>
            <Text style={landingPageStyles.aboutCardTitle}>10,000+ Happy Customers</Text>
            <Text style={landingPageStyles.aboutCardText}>
              Trusted by families and businesses across Cape Town for their transport needs.
            </Text>
          </View>

          <View style={landingPageStyles.aboutCard}>
            <View style={landingPageStyles.aboutIconContainer}>
              <IconButton
                icon="car-multiple"
                size={32}
                iconColor={colors.primary}
                style={landingPageStyles.aboutIcon}
              />
            </View>
            <Text style={landingPageStyles.aboutCardTitle}>Modern Fleet</Text>
            <Text style={landingPageStyles.aboutCardText}>
              Well-maintained vehicles with GPS tracking and safety features.
            </Text>
          </View>

          <View style={landingPageStyles.aboutCard}>
            <View style={landingPageStyles.aboutIconContainer}>
              <IconButton
                icon="clock-check"
                size={32}
                iconColor={colors.primary}
                style={landingPageStyles.aboutIcon}
              />
            </View>
            <Text style={landingPageStyles.aboutCardTitle}>99.8% On-Time Record</Text>
            <Text style={landingPageStyles.aboutCardText}>
              Punctuality is our priority. We ensure you reach your destination on time.
            </Text>
          </View>
        </View>

        <View style={landingPageStyles.leadershipSection}>
          <Text style={landingPageStyles.leadershipTitle}>Meet Our Leadership</Text>
          <View style={landingPageStyles.leadershipCard}>
            <View style={landingPageStyles.leadershipImageContainer}>
              <Image
                source={require('../../assets/taswill_heynes.png')}
                style={landingPageStyles.leadershipImage}
                resizeMode="cover"
              />
            </View>
            <View style={landingPageStyles.leadershipInfo}>
              <Text style={landingPageStyles.leadershipName}>Mr. Taswill Heynes</Text>
              <Text style={landingPageStyles.leadershipRole}>Owner & CEO</Text>
              <Text style={landingPageStyles.leadershipDescription}>
                Leading K & T Transport with passion and dedication, Mr. Heynes brings years of
                experience in the transport industry, ensuring every journey is safe, reliable, and professional.
              </Text>
            </View>
          </View>
        </View>

        <View style={landingPageStyles.missionSection}>
          <Text style={landingPageStyles.missionTitle}>Our Mission</Text>
          <Text style={landingPageStyles.missionText}>
            To provide safe, reliable, and affordable transport solutions that connect communities
            throughout Mitchell's Plain, Cape Town, and the broader Western Cape. We're committed to
            excellence in service delivery while maintaining the highest safety standards for our local communities.
          </Text>
        </View>
      </View>
    </View>
  );

  const ContactSection = () => (
    <View style={landingPageStyles.contactContainer}>
      <View style={landingPageStyles.contactContent}>
        <Text style={landingPageStyles.sectionTitle}>Get In Touch</Text>
        <Text style={landingPageStyles.sectionSubtitle}>
          Ready to book your transport or have questions? We're here to help.
        </Text>

        <View style={landingPageStyles.contactGrid}>
          <View style={landingPageStyles.contactCard}>
            <View style={landingPageStyles.contactIconContainer}>
              <IconButton
                icon="phone"
                size={24}
                iconColor={colors.textInverse}
                style={landingPageStyles.contactIcon}
              />
            </View>
            <Text style={landingPageStyles.contactMethod}>Call Us</Text>
            <Text style={landingPageStyles.contactDetail}>+27 78 778 4182</Text>
            <Text style={landingPageStyles.contactTime}>Mon-Fri: 6AM-8PM, Sat: 7AM-6PM</Text>
          </View>

          <View style={landingPageStyles.contactCard}>
            <View style={landingPageStyles.contactIconContainer}>
              <IconButton
                icon="email"
                size={24}
                iconColor={colors.textInverse}
                style={landingPageStyles.contactIcon}
              />
            </View>
            <Text style={landingPageStyles.contactMethod}>Email Us</Text>
            <Text style={landingPageStyles.contactDetail}>info@ktransport.co.za</Text>
            <Text style={landingPageStyles.contactTime}>Direct line to Mr. Taswill Heynes</Text>
          </View>

          <View style={landingPageStyles.contactCard}>
            <View style={landingPageStyles.contactIconContainer}>
              <IconButton
                icon="map-marker"
                size={24}
                iconColor={colors.textInverse}
                style={landingPageStyles.contactIcon}
              />
            </View>
            <Text style={landingPageStyles.contactMethod}>Visit Us</Text>
            <Text style={landingPageStyles.contactDetail}>Beacon Valley, Mitchell's Plain</Text>
            <Text style={landingPageStyles.contactTime}>Cape Town, South Africa</Text>
          </View>
        </View>

        <View style={landingPageStyles.emergencyContact}>
          <Surface style={landingPageStyles.emergencyCard} elevation={4}>
            <View style={landingPageStyles.emergencyHeader}>
              <IconButton
                icon="phone-alert"
                size={24}
                iconColor={colors.error}
              />
              <Text style={landingPageStyles.emergencyTitle}>24/7 Emergency Support</Text>
            </View>
            <Text style={landingPageStyles.emergencyNumber}>+27 78 778 4182</Text>
            <Text style={landingPageStyles.emergencyText}>
              For urgent transport issues or emergencies - Mr. Taswill Heynes, Owner & CEO
            </Text>
          </Surface>
        </View>
      </View>
    </View>
  );

  return (
    <View style={landingPageStyles.container}>
      <NavigationBar />

      <Animated.ScrollView
        ref={scrollViewRef}
        style={landingPageStyles.scrollContainer}
        showsVerticalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false }
        )}
        scrollEventThrottle={16}
      >
        <View
          ref={sectionRefs.home}
          onLayout={(event) => {
            const { y, height } = event.nativeEvent.layout;
            console.log(`🏠 Home section layout: y=${y}, height=${height}`);
            updateSectionPosition('home', y);
          }}
        >
          <HeroSection />
        </View>
        <View
          ref={sectionRefs.features}
          onLayout={(event) => {
            const { y, height } = event.nativeEvent.layout;
            console.log(`⭐ Features section layout: y=${y}, height=${height}`);
            updateSectionPosition('features', y);
          }}
        >
          <FeaturesSection />
        </View>
        <View
          ref={sectionRefs.services}
          onLayout={(event) => {
            const { y, height } = event.nativeEvent.layout;
            console.log(`🚌 Services section layout: y=${y}, height=${height}`);
            updateSectionPosition('services', y);
          }}
        >
          <ServicesSection />
        </View>
        <View
          ref={sectionRefs.about}
          onLayout={(event) => {
            const { y, height } = event.nativeEvent.layout;
            console.log(`ℹ️ About section layout: y=${y}, height=${height}`);
            updateSectionPosition('about', y);
          }}
        >
          <AboutSection />
        </View>
        <View
          ref={sectionRefs.contact}
          onLayout={(event) => {
            const { y, height } = event.nativeEvent.layout;
            console.log(`📞 Contact section layout: y=${y}, height=${height}`);
            updateSectionPosition('contact', y);
          }}
        >
          <ContactSection />
        </View>
        <CTASection />
      </Animated.ScrollView>
    </View>
  );
};


export default LandingPage;
