import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { 
  Search, 
  BookOpen, 
  Monitor, 
  Wifi, 
  Shield, 
  Smartphone,
  Printer,
  ChevronRight,
  Star
} from 'lucide-react-native';
import { useState } from 'react';

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

export default function KnowledgeScreen() {
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { icon: Monitor, title: 'Computer Issues', count: 24, color: colors.primary },
    { icon: Wifi, title: 'Internet & WiFi', count: 18, color: colors.lightAccent },
    { icon: Shield, title: 'Security & Privacy', count: 15, color: colors.accent },
    { icon: Smartphone, title: 'Mobile Devices', count: 12, color: colors.mint },
    { icon: Printer, title: 'Printers & Devices', count: 9, color: colors.secondary },
  ];

  const popularTopics = [
    { title: 'Why is my computer running slow?', views: '2.1k' },
    { title: 'How to connect to WiFi', views: '1.8k' },
    { title: 'Installing software safely', views: '1.5k' },
    { title: 'Setting up email on phone', views: '1.2k' },
    { title: 'Password security tips', views: '1.1k' },
  ];

  const quickTips = [
    {
      title: 'Weekly Restart',
      description: 'Restart your computer at least once a week to keep it running smoothly',
      icon: '💡'
    },
    {
      title: 'Strong Passwords',
      description: 'Use unique passwords for each account and enable two-factor authentication',
      icon: '🔐'
    },
    {
      title: 'Regular Updates',
      description: 'Keep your software and operating system updated for security and performance',
      icon: '⚡'
    }
  ];

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={[colors.primary, colors.secondary]}
        style={styles.header}
      >
        <Text style={styles.headerTitle}>Knowledge Base</Text>
        <Text style={styles.headerSubtitle}>
          Find answers and learn tech tips
        </Text>
      </LinearGradient>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.searchSection}>
          <View style={styles.searchContainer}>
            <Search size={20} color={colors.gray} strokeWidth={2} />
            <TextInput
              style={styles.searchInput}
              placeholder="Search articles and guides..."
              placeholderTextColor={colors.gray}
              value={searchQuery}
              onChangeText={setSearchQuery}
            />
          </View>
        </View>

        <View style={styles.categoriesSection}>
          <Text style={styles.sectionTitle}>Browse Categories</Text>
          <View style={styles.categoriesGrid}>
            {categories.map((category, index) => (
              <TouchableOpacity key={index} style={styles.categoryCard}>
                <View style={[styles.categoryIcon, { backgroundColor: category.color + '20' }]}>
                  <category.icon size={24} color={category.color} strokeWidth={2} />
                </View>
                <Text style={styles.categoryTitle}>{category.title}</Text>
                <Text style={styles.categoryCount}>{category.count} articles</Text>
                <ChevronRight 
                  size={16} 
                  color={colors.gray} 
                  strokeWidth={2} 
                  style={styles.categoryArrow}
                />
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={styles.popularSection}>
          <Text style={styles.sectionTitle}>Popular Topics</Text>
          {popularTopics.map((topic, index) => (
            <TouchableOpacity key={index} style={styles.topicCard}>
              <View style={styles.topicContent}>
                <Text style={styles.topicTitle}>{topic.title}</Text>
                <View style={styles.topicMeta}>
                  <Star size={14} color={colors.mint} strokeWidth={2} />
                  <Text style={styles.topicViews}>{topic.views} views</Text>
                </View>
              </View>
              <ChevronRight size={16} color={colors.gray} strokeWidth={2} />
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.tipsSection}>
          <Text style={styles.sectionTitle}>Quick Tips</Text>
          {quickTips.map((tip, index) => (
            <View key={index} style={styles.tipCard}>
              <Text style={styles.tipEmoji}>{tip.icon}</Text>
              <View style={styles.tipContent}>
                <Text style={styles.tipTitle}>{tip.title}</Text>
                <Text style={styles.tipDescription}>{tip.description}</Text>
              </View>
            </View>
          ))}
        </View>

        <View style={styles.helpSection}>
          <LinearGradient
            colors={[colors.accent + '15', colors.mint + '20']}
            style={styles.helpCard}
          >
            <BookOpen size={28} color={colors.accent} strokeWidth={2} />
            <Text style={styles.helpTitle}>Still Need Help?</Text>
            <Text style={styles.helpDescription}>
              Can't find what you're looking for? Our support team is here to help with personalized assistance.
            </Text>
            <TouchableOpacity style={styles.helpButton}>
              <Text style={styles.helpButtonText}>Contact Support</Text>
            </TouchableOpacity>
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
  searchSection: {
    marginTop: -15,
    marginBottom: 30,
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
  categoriesSection: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 20,
    fontFamily: 'Inter-SemiBold',
    color: colors.darkGray,
    marginBottom: 16,
  },
  categoriesGrid: {
    gap: 12,
  },
  categoryCard: {
    backgroundColor: colors.white,
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: colors.gray,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 2,
  },
  categoryIcon: {
    width: 40,
    height: 40,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  categoryTitle: {
    flex: 1,
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
    color: colors.darkGray,
  },
  categoryCount: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: colors.gray,
    marginRight: 8,
  },
  categoryArrow: {
    opacity: 0.6,
  },
  popularSection: {
    marginBottom: 30,
  },
  topicCard: {
    backgroundColor: colors.lightGray,
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  topicContent: {
    flex: 1,
  },
  topicTitle: {
    fontSize: 16,
    fontFamily: 'Inter-Medium',
    color: colors.darkGray,
    marginBottom: 4,
  },
  topicMeta: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  topicViews: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: colors.gray,
    marginLeft: 4,
  },
  tipsSection: {
    marginBottom: 30,
  },
  tipCard: {
    backgroundColor: colors.white,
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 12,
    borderWidth: 1,
    borderColor: colors.lightGray,
  },
  tipEmoji: {
    fontSize: 24,
    marginRight: 12,
    marginTop: 2,
  },
  tipContent: {
    flex: 1,
  },
  tipTitle: {
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
    color: colors.darkGray,
    marginBottom: 4,
  },
  tipDescription: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: colors.gray,
    lineHeight: 20,
  },
  helpSection: {
    marginBottom: 30,
  },
  helpCard: {
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
  },
  helpTitle: {
    fontSize: 18,
    fontFamily: 'Inter-SemiBold',
    color: colors.darkGray,
    marginTop: 12,
    marginBottom: 8,
  },
  helpDescription: {
    fontSize: 16,
    fontFamily: 'Inter-Regular',
    color: colors.gray,
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 16,
  },
  helpButton: {
    backgroundColor: colors.accent,
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
  },
  helpButtonText: {
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
    color: colors.white,
  },
});