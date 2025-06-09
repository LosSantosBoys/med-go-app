import { FontAwesome5, Ionicons, MaterialCommunityIcons, Octicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';


export default function TabLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: '#000',
        tabBarInactiveTintColor: '#888',
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: '#fff',
          borderTopWidth: 1,
          borderTopColor: '#eee',
          height: 70,
          paddingBottom: 10,
          paddingTop: 5,
        },
        tabBarIcon: ({ focused }) => {
          const color = focused ? '#5F77CD' : '#71727A'

          if (route.name === 'index') {
            return <Ionicons name='home' size={20} color={color} />
          } else if (route.name === 'calendar') {
            return <FontAwesome5 name="calendar-alt" size={20} color={color} />
          } else if (route.name === 'doctors') {
            return <Octicons name="three-bars" size={20} color={color} />
          } else if (route.name === 'documents') {
            return <MaterialCommunityIcons name="file-document-multiple-outline" size={20} color={color} />
          } else if (route.name === 'messages') {
            return <MaterialCommunityIcons name="message-reply-text-outline" size={20} color={color} />
          }
        }
      })}
    >
      <Tabs.Screen name="index" options={{ headerShown: false }} />
      <Tabs.Screen name="calendar" options={{ headerShown: false }} />
      <Tabs.Screen name="documents" options={{ headerShown: false }} />
      <Tabs.Screen name="messages" options={{ headerShown: false }} />
      <Tabs.Screen name="doctors" options={{ headerShown: false }} />
    </Tabs>
  )
}
