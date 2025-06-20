import { Header } from "@/src/components";
import { ScrollView } from "react-native";
import { Actions, Appoiments, RecentActivities, Tasks } from "./components";

export const Home: React.FC = () => {
  return (
    <ScrollView className="bg-default-gray">
      <Header />
      <Appoiments />
      <Tasks />
      <Actions />
      <RecentActivities />
    </ScrollView>
  )
}