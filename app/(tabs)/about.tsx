import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { 
  User, 
  Award, 
  Shield, 
  Heart, 
  Star,
  Mail,
  Phone,
  MapPin
} from 'lucide-react-native';

const colors = {
  primary: '#034693',
  secondary: '#052D3C',
  accent: '#289291',
  lightAccent: '#1296B3',
  mint: '#5BAA94',
  white: '#FFFFFF',
  gray: '#6B7280',
  lightGray: '#F3F4F6',
  darkGray: '#374151'
};

export default function AboutScreen() {
  const testimonials = [
    {
      text: "Morgan from Gokame, not only fixed my slow computer but also explained everything in a way I could easily understand. Thank you so much!",
      author: "Jim in Flowery Branch, GA",
      rating: 5
    },
    {
      text: "Patient, professional, and incredibly knowledgeable. Gokame made setting up my home network feel effortless.",
      author: "Sarah M.",
      rating: 5
    },
    {
      text: "Finally found someone who doesn't make me feel embarrassed about asking basic tech questions. Highly recommend!",
      author: "Robert T.",
      rating: 5
    }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Patient Support',
      description: 'We take the time to understand your needs and explain solutions clearly'
    },
    {
      icon: Shield,
      title: 'Privacy First',
      description: 'Your data and privacy are our top priority in every interaction'
    },
    {
      icon: Award,
      title: 'Expert Knowledge',
      description: 'Master\'s in Information Systems with years of practical experience'
    }
  ];

  const handleContact = (method: string) => {
    switch (method) {
      case 'email':
        Alert.alert('Email', 'hello@gokame.tech');
        break;
      case 'phone':
        Alert.alert('Phone', '(555) GOKAME\n(555) 465-2631');
        break;
      case 'location':
        Alert.alert('Service Area', 'Serving North Georgia and surrounding areas');
        break;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={[colors.primary, colors.secondary]}
        style={styles.header}
      >
        <Text style={styles.headerTitle}>About Gokame</Text>
        <Text style={styles.headerSubtitle}>
          Making technology simple for everyone
        </Text>
      </LinearGradient>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.introSection}>
          <View style={styles.founderCard}>
            <View style={styles.avatarContainer}>
              <Text style={styles.avatarEmoji}>👨‍💻</Text>
            </View>
            <Text style={styles.founderName}>Morgan, Founder</Text>
            <Text style={styles.founderTitle}>Master's in Information Systems</Text>
            <Text style={styles.founderDescription}>
              Hi, I'm Morgan, founder of Gokame. I hold a Master's in Information Systems and have dedicated my career to simplifying technology for everyone.
            </Text>
          </View>
        </View>

        <View style={styles.philosophySection}>
          <Text style={styles.sectionTitle}>Our Philosophy</Text>
          <View style={styles.philosophyCard}>
            <Text style={styles.philosophyText}>
              "We believe no question is too basic, and we're here to help you feel confident with your tech"
            </Text>
            <View style={styles.turtleContainer}>
              <Text style={styles.turtleEmoji}>🐢</Text>
              <Text style={styles.turtleCaption}>Like the turtle, we believe in steady, reliable progress</Text>
            </View>
          </View>
        </View>

        <View style={styles.valuesSection}>
          <Text style={styles.sectionTitle}>What We Stand For</Text>
          {values.map((value, index) => (
            <View key={index} style={styles.valueCard}>
              <View style={[styles.valueIcon, { backgroundColor: colors.accent + '20' }]}>
                <value.icon size={24} color={colors.accent} strokeWidth={2} />
              </View>
              <View style={styles.valueContent}>
                <Text style={styles.valueTitle}>{value.title}</Text>
                <Text style={styles.valueDescription}>{value.description}</Text>
              </View>
            </View>
          ))}
        </View>

        <View style={styles.testimonialsSection}>
          <Text style={styles.sectionTitle}>What Our Clients Say</Text>
          {testimonials.map((testimonial, index) => (
            <View key={index} style={styles.testimonialCard}>
              <View style={styles.starsContainer}>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} color={colors.mint} fill={colors.mint} strokeWidth={1} />
                ))}
              </View>
              <Text style={styles.testimonialText}>"{testimonial.text}"</Text>
              <Text style={styles.testimonialAuthor}>— {testimonial.author}</Text>
            </View>
          ))}
        </View>

        <View style={styles.privacySection}>
          <Text style={styles.sectionTitle}>Privacy & Security</Text>
          <View style={styles.privacyCard}>
            <Shield size={32} color={colors.accent} strokeWidth={2} />
            <Text style={styles.privacyTitle}>Your Data is Safe</Text>
            <Text style={styles.privacyText}>
              We handle all user data with the utmost care and ensure complete privacy. We never share your information and follow industry best practices for data security.
            </Text>
            <TouchableOpacity style={styles.privacyButton}>
              <Text style={styles.privacyButtonText}>View Privacy Policy</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.contactSection}>
          <Text style={styles.sectionTitle}>Get in Touch</Text>
          <View style={styles.contactGrid}>
            <TouchableOpacity 
              style={styles.contactCard}
              onPress={() => handleContact('phone')}
            >
              <Phone size={24} color={colors.primary} strokeWidth={2} />
              <Text style={styles.contactTitle}>Call Us</Text>
              <Text style={styles.contactDetails}>(555) GOKAME</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.contactCard}
              onPress={() => handleContact('email')}
            >
              <Mail size={24} color={colors.lightAccent} strokeWidth={2} />
              <Text style={styles.contactTitle}>Email</Text>
              <Text style={styles.contactDetails}>hello@gokame.tech</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.contactCard}
              onPress={() => handleContact('location')}
            >
              <MapPin size={24} color={colors.accent} strokeWidth={2} />
              <Text style={styles.contactTitle}>Service Area</Text>
              <Text style={styles.contactDetails}>North Georgia</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  header: {
    paddingTop: 20,
    paddingBottom: 30,
    paddingHorizontal: 20,
  },
  headerTitle: {
    fontSize: 28,
    fontFamily: 'Inter-Bold',
    color: colors.white,
    marginBottom: 8,
  },
  headerSubtitle: {
    fontSize: 16,
    fontFamily: 'Inter-Regular',
    color: colors.white + 'E6',
    lineHeight: 22,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  introSection: {
    marginTop: 20,
    marginBottom: 30,
  },
  founderCard: {
    backgroundColor: colors.white,
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
    shadowColor: colors.gray,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 3,
  },
  avatarContainer: {
    width: 80,
    height: 80,
    backgroundColor: colors.lightAccent + '20',
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  avatarEmoji: {
    fontSize: 40,
  },
  founderName: {
    fontSize: 22,
    fontFamily: 'Inter-Bold',
    color: colors.darkGray,
    marginBottom: 4,
  },
  founderTitle: {
    fontSize: 16,
    fontFamily: 'Inter-Medium',
    color: colors.primary,
    marginBottom: 16,
  },
  founderDescription: {
    fontSize: 16,
    fontFamily: 'Inter-Regular',
    color: colors.gray,
    textAlign: 'center',
    lineHeight: 24,
  },
  philosophySection: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 20,
    fontFamily: 'Inter-SemiBold',
    color: colors.darkGray,
    marginBottom: 16,
  },
  philosophyCard: {
    backgroundColor: colors.mint + '15',
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
  },
  philosophyText: {
    fontSize: 18,
    fontFamily: 'Inter-Medium',
    color: colors.darkGray,
    textAlign: 'center',
    lineHeight: 26,
    fontStyle: 'italic',
    marginBottom: 20,
  },
  turtleContainer: {
    alignItems: 'center',
  },
  turtleEmoji: {
    fontSize: 32,
    marginBottom: 8,
  },
  turtleCaption: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: colors.gray,
    textAlign: 'center',
  },
  valuesSection: {
    marginBottom: 30,
  },
  valueCard: {
    backgroundColor: colors.white,
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 12,
    shadowColor: colors.gray,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 2,
  },
  valueIcon: {
    width: 48,
    height: 48,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  valueContent: {
    flex: 1,
  },
  valueTitle: {
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
    color: colors.darkGray,
    marginBottom: 4,
  },
  valueDescription: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: colors.gray,
    lineHeight: 20,
  },
  testimonialsSection: {
    marginBottom: 30,
  },
  testimonialCard: {
    backgroundColor: colors.lightGray,
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
  },
  starsContainer: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  testimonialText: {
    fontSize: 16,
    fontFamily: 'Inter-Regular',
    color: colors.darkGray,
    lineHeight: 24,
    marginBottom: 8,
    fontStyle: 'italic',
  },
  testimonialAuthor: {
    fontSize: 14,
    fontFamily: 'Inter-Medium',
    color: colors.gray,
  },
  privacySection: {
    marginBottom: 30,
  },
  privacyCard: {
    backgroundColor: colors.white,
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.accent + '30',
  },
  privacyTitle: {
    fontSize: 18,
    fontFamily: 'Inter-SemiBold',
    color: colors.darkGray,
    marginTop: 12,
    marginBottom: 12,
  },
  privacyText: {
    fontSize: 16,
    fontFamily: 'Inter-Regular',
    color: colors.gray,
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 16,
  },
  privacyButton: {
    backgroundColor: colors.accent,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
  },
  privacyButtonText: {
    fontSize: 16,
    fontFamily: 'Inter-Medium',
    color: colors.white,
  },
  contactSection: {
    marginBottom: 30,
  },
  contactGrid: {
    gap: 12,
  },
  contactCard: {
    backgroundColor: colors.white,
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    shadowColor: colors.gray,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 2,
  },
  contactTitle: {
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
    color: colors.darkGray,
    marginTop: 8,
    marginBottom: 4,
  },
  contactDetails: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: colors.gray,
  },
});