import SidebarComponent from "../components/sidebar/sidebar.module";
import MainComponent from "./main/page";


export default function Dashboard() {
  return (
<main>
    <SidebarComponent/>
    <MainComponent/>
</main>
  );
}