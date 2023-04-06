import Title from "../components/ui/Title";
import MealsCategories from "../components/meals/MealsCategories";
import Layout from "../components/ui/Layout";

const HomePage = ({navigation}) => {
  return (
    <Layout>
      <Title> Meals </Title>
      <MealsCategories navigation={navigation} />
    </Layout>  
  );
};

export default HomePage;
