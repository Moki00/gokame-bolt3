import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { 
  Monitor, 
  Wifi, 
  Shield, 
  Clock, 
  MapPin, 
  DollarSign,
  ChevronRight
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

export default function ServicesScreen() {
  const services = [
    {
      icon: Monitor,
      title: 'Computer Support',
      description: 'Slow performance, software issues, hardware problems',
      color: colors.primary,
    },
    {
      icon: Wifi,
      title: 'Network & Connectivity',
      description: 'Internet setup, WiFi issues, router configuration',
      color: colors.lightAccent,
    },
    {
      icon: Shield,
      title: 'Security & Privacy',
      description: 'Virus removal, data protection, secure setup',
      color: colors.accent,
    },
  ];

  const pricing = [
    { service: 'Remote Support', price: '$30/hour', description: 'Screen sharing assistance' },
    { service: 'In-Person Visit', price: '$50 travel + $50/hour', description: 'On-site support' },
    { service: 'Emergency Support', price: '$75/hour', description: 'Same-day urgent help' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={[colors.primary, colors.secondary]}
        style={styles.header}
      >
        <Text style={styles.headerTitle}>Our Services</Text>
        <Text style={styles.headerSubtitle}>
          Professional tech support for all your needs
        </Text>
      </LinearGradient>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.servicesSection}>
          <Text style={styles.sectionTitle}>What We Fix</Text>
          {services.map((service, index) => (
            <TouchableOpacity key={index} style={styles.serviceCard}>
              <View style={[styles.serviceIcon, { backgroundColor: service.color + '20' }]}>
                <service.icon size={24} color={service.color} strokeWidth={2} />
              </View>
              <View style={styles.serviceContent}>
                <Text style={styles.serviceTitle}>{service.title}</Text>
                <Text style={styles.serviceDescription}>{service.description}</Text>
              </View>
              <ChevronRight size={20} color={colors.gray} strokeWidth={2} />
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.pricingSection}>
          <Text style={styles.sectionTitle}>Transparent Pricing</Text>
          {pricing.map((item, index) => (
            <View key={index} style={styles.pricingCard}>
              <View style={styles.pricingHeader}>
                <Text style={styles.pricingTitle}>{item.service}</Text>
                <Text style={styles.pricingPrice}>{item.price}</Text>
              </View>
              <Text style={styles.pricingDescription}>{item.description}</Text>
            </View>
          ))}
        </View>

        <View style={styles.methodsSection}>
          <Text style={styles.sectionTitle}>Service Methods</Text>
          
          <View style={styles.methodCard}>
            <View style={styles.methodHeader}>
              <Monitor size={24} color={colors.accent} strokeWidth={2} />
              <Text style={styles.methodTitle}>Remote Assistance</Text>
            </View>
            <Text style={styles.methodDescription}>
              Screen sharing for software issues, settings configuration, and troubleshooting
            </Text>
          </View>

          <View style={styles.methodCard}>
            <View style={styles.methodHeader}>
              <MapPin size={24} color={colors.lightAccent} strokeWidth={2} />
              <Text style={styles.methodTitle}>In-Person Service</Text>
            </View>
            <Text style={styles.methodDescription}>
              On-site visits for hardware issues, network setup, and hands-on training
            </Text>
          </View>
        </View>

        <View style={styles.guaranteeSection}>
          <LinearGradient
            colors={[colors.mint + '20', colors.accent + '15']}
            style={styles.guaranteeCard}
          >
            <Shield size={32} color={colors.accent} strokeWidth={2} />
            <Text style={styles.guaranteeTitle}>Our Promise</Text>
            <Text style={styles.guaranteeText}>
              We explain everything in plain language and ensure you feel confident with your technology before we leave.
            </Text>
          </LinearGradient>
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
  servicesSection: {
    marginTop: 20,
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 20,
    fontFamily: 'Inter-SemiBold',
    color: colors.darkGray,
    marginBottom: 16,
  },
  serviceCard: {
    backgroundColor: colors.white,
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: colors.gray,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 2,
  },
  serviceIcon: {
    width: 48,
    height: 48,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  serviceContent: {
    flex: 1,
  },
  serviceTitle: {
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
    color: colors.darkGray,
    marginBottom: 4,
  },
  serviceDescription: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: colors.gray,
    lineHeight: 20,
  },
  pricingSection: {
    marginBottom: 30,
  },
  pricingCard: {
    backgroundColor: colors.lightGray,
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
  },
  pricingHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  pricingTitle: {
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
    color: colors.darkGray,
  },
  pricingPrice: {
    fontSize: 16,
    fontFamily: 'Inter-Bold',
    color: colors.primary,
  },
  pricingDescription: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: colors.gray,
  },
  methodsSection: {
    marginBottom: 30,
  },
  methodCard: {
    backgroundColor: colors.white,
    borderRadius: 12,  
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: colors.lightGray,
  },
  methodHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  methodTitle: {
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
    color: colors.darkGray,
    marginLeft: 12,
  },
  methodDescription: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: colors.gray,
    lineHeight: 20,
  },
  guaranteeSection: {
    marginBottom: 30,
  },
  guaranteeCard: {
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
    textAlign: 'center',
  },
  guaranteeTitle: {
    fontSize: 18,
    fontFamily: 'Inter-SemiBold',
    color: colors.darkGray,
    marginTop: 12,
    marginBottom: 8,
  },
  guaranteeText: {
    fontSize: 16,
    fontFamily: 'Inter-Regular',
    color: colors.gray,
    textAlign: 'center',
    lineHeight: 24,
  },
});