import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput, Alert, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Search, Zap, Calendar, Monitor, BookOpen, Phone, Shield, CircleHelp as HelpCircle } from 'lucide-react-native';
import { useState } from 'react';
import { Platform } from 'react-native';
import * as Linking from 'expo-linking';

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

export default function HomeScreen() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleEmergencyCall = () => {
    const phoneNumber = Platform.OS === 'ios' ? 'tel:+1-555-GOKAME' : 'tel:+15554652631';
    
    if (Platform.OS !== 'web') {
      Linking.openURL(phoneNumber);
    } else {
      Alert.alert(
        'Emergency Support',
        'Call us at: (555) GOKAME\n(555) 465-2631',
        [{ text: 'OK' }]
      );
    }
  };

  const quickActions = [
    {
      icon: Zap,
      title: 'Emergency Support',
      subtitle: 'Urgent tech issues',
      color: colors.accent,
      action: handleEmergencyCall
    },
    {
      icon: Calendar,
      title: 'Schedule Service',
      subtitle: 'Book an appointment',
      color: colors.lightAccent,
      action: () => Alert.alert('Schedule Service', 'Coming soon!')
    },
    {
      icon: Monitor,
      title: 'Remote Assistance',
      subtitle: 'Get help online',
      color: colors.mint,
      action: () => Alert.alert('Remote Assistance', 'Coming soon!')
    },
    {
      icon: BookOpen,
      title: 'Knowledge Base',
      subtitle: 'Self-help resources',
      color: colors.primary,
      action: () => Alert.alert('Knowledge Base', 'Coming soon!')
    }
  ];

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={[colors.primary, colors.secondary]}
        style={styles.header}
      >
        <View style={styles.headerContent}>
          <View style={styles.logoContainer}>
            <View style={styles.logo}>
              <Text style={styles.logoEmoji}>🐢</Text>
            </View>
            <View>
              <Text style={styles.brandName}>Gokame</Text>
              <Text style={styles.brandTagline}>Tech Support Services</Text>
            </View>
          </View>
          
          <TouchableOpacity style={styles.helpButton} onPress={() => Alert.alert('Help', 'How can we assist you today?')}>
            <HelpCircle size={24} color={colors.white} strokeWidth={2} />
          </TouchableOpacity>
        </View>

        <View style={styles.welcomeSection}>
          <Text style={styles.welcomeTitle}>Welcome! How can we help?</Text>
          <Text style={styles.welcomeSubtitle}>
            No question is too basic. We're here to make tech simple for you.
          </Text>
        </View>
      </LinearGradient>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.searchSection}>
          <View style={styles.searchContainer}>
            <Search size={20} color={colors.gray} strokeWidth={2} />
            <TextInput
              style={styles.searchInput}
              placeholder="Search for help topics..."
              placeholderTextColor={colors.gray}
              value={searchQuery}
              onChangeText={setSearchQuery}
            />
          </View>
        </View>

        <TouchableOpacity style={styles.getHelpButton}>
          <LinearGradient
            colors={[colors.accent, colors.lightAccent]}
            style={styles.getHelpGradient}
          >
            <Shield size={28} color={colors.white} strokeWidth={2} />
            <Text style={styles.getHelpText}>Get Help Now</Text>
            <Text style={styles.getHelpSubtext}>Start your support request</Text>
          </LinearGradient>
        </TouchableOpacity>

        <View style={styles.quickActionsSection}>
          <Text style={styles.sectionTitle}>Quick Actions</Text>
          <View style={styles.quickActionsGrid}>
            {quickActions.map((action, index) => (
              <TouchableOpacity
                key={index}
                style={[styles.quickActionCard, { borderLeftColor: action.color }]}
                onPress={action.action}
                activeOpacity={0.7}
              >
                <View style={[styles.actionIcon, { backgroundColor: action.color + '20' }]}>
                  <action.icon size={24} color={action.color} strokeWidth={2} />
                </View>
                <View style={styles.actionContent}>
                  <Text style={styles.actionTitle}>{action.title}</Text>
                  <Text style={styles.actionSubtitle}>{action.subtitle}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <TouchableOpacity style={styles.emergencyBanner} onPress={handleEmergencyCall}>
          <LinearGradient
            colors={[colors.accent + '15', colors.mint + '15']}
            style={styles.emergencyGradient}
          >
            <Phone size={20} color={colors.accent} strokeWidth={2} />
            <View style={styles.emergencyText}>
              <Text style={styles.emergencyTitle}>Emergency Support Available</Text>
              <Text style={styles.emergencySubtitle}>Tap to call (555) GOKAME</Text>
            </View>
          </LinearGradient>
        </TouchableOpacity>

        <View style={styles.featuresSection}>
          <Text style={styles.sectionTitle}>Why Choose Gokame?</Text>
          <View style={styles.featuresList}>
            <View style={styles.featureItem}>
              <View style={[styles.featureBullet, { backgroundColor: colors.mint }]} />
              <Text style={styles.featureText}>Patient, clear explanations</Text>
            </View>
            <View style={styles.featureItem}>
              <View style={[styles.featureBullet, { backgroundColor: colors.lightAccent }]} />
              <Text style={styles.featureText}>No question is too basic</Text>
            </View>
            <View style={styles.featureItem}>
              <View style={[styles.featureBullet, { backgroundColor: colors.accent }]} />
              <Text style={styles.featureText}>Trusted by home users & businesses</Text>
            </View>
          </View>
        </View>

        <View style={styles.poweredBySection}>
          <View style={styles.poweredByCard}>
            <Text style={styles.poweredByText}>Powered by</Text>
            <Image 
              source={{ uri: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=200&h=60&fit=crop' }}
              style={styles.boltLogo}
              resizeMode="contain"
            />
            <Text style={styles.boltText}>Bolt</Text>
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
    paddingTop: 10,
    paddingBottom: 30,
    paddingHorizontal: 20,
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 50,
    height: 50,
    backgroundColor: colors.white + '20',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  logoEmoji: {
    fontSize: 24,
  },
  brandName: {
    fontSize: 24,
    fontFamily: 'Inter-Bold',
    color: colors.white,
  },
  brandTagline: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: colors.white + 'CC',
  },
  helpButton: {
    width: 44,
    height: 44,
    backgroundColor: colors.white + '20',
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeSection: {
    marginTop: 10,
  },
  welcomeTitle: {
    fontSize: 20,
    fontFamily: 'Inter-SemiBold',
    color: colors.white,
    marginBottom: 6,
  },
  welcomeSubtitle: {
    fontSize: 16,
    fontFamily: 'Inter-Regular',
    color: colors.white + 'E6',
    lineHeight: 22,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  searchSection: {
    marginTop: -15,
    marginBottom: 25,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    shadowColor: colors.secondary,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  searchInput: {
    flex: 1,
    marginLeft: 12,
    fontSize: 16,
    fontFamily: 'Inter-Regular',
    color: colors.darkGray,
  },
  getHelpButton: {
    marginBottom: 30,
    borderRadius: 16,
    overflow: 'hidden',
    shadowColor: colors.accent,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 12,
    elevation: 5,
  },
  getHelpGradient: {
    paddingVertical: 24,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  getHelpText: {
    fontSize: 20,
    fontFamily: 'Inter-Bold',
    color: colors.white,
    marginLeft: 12,
    marginRight: 8,
  },
  getHelpSubtext: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: colors.white + 'CC',
  },
  quickActionsSection: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: 'Inter-SemiBold',
    color: colors.darkGray,
    marginBottom: 16,
  },
  quickActionsGrid: {
    gap: 12,
  },
  quickActionCard: {
    backgroundColor: colors.white,
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    borderLeftWidth: 4,
    shadowColor: colors.gray,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 2,
  },
  actionIcon: {
    width: 48,
    height: 48,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  actionContent: {
    flex: 1,
  },
  actionTitle: {
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
    color: colors.darkGray,
    marginBottom: 2,
  },
  actionSubtitle: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: colors.gray,
  },
  emergencyBanner: {
    marginBottom: 30,
    borderRadius: 12,
    overflow: 'hidden',
  },
  emergencyGradient: {
    paddingVertical: 16,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.accent + '30',
  },
  emergencyText: {
    marginLeft: 12,
    flex: 1,
  },
  emergencyTitle: {
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
    color: colors.accent,
    marginBottom: 2,
  },
  emergencySubtitle: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: colors.gray,
  },
  featuresSection: {
    marginBottom: 30,
  },
  featuresList: {
    gap: 12,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  featureBullet: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 12,
  },
  featureText: {
    fontSize: 16,
    fontFamily: 'Inter-Regular',
    color: colors.darkGray,
    flex: 1,
  },
  poweredBySection: {
    marginBottom: 30,
  },
  poweredByCard: {
    backgroundColor: colors.lightGray,
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  poweredByText: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: colors.gray,
    marginRight: 8,
  },
  boltLogo: {
    width: 60,
    height: 24,
    marginRight: 8,
  },
  boltText: {
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
    color: colors.primary,
  },
});