import IBulletinData from "./IBulletinData";

const apiUrl = "https://react-app-bulletins1.azurewebsites.net/api/bulletins";

const LocalData: IBulletinData[] = [
  {
    id: "b9277c30-8989-4f11-a005-437fc7854247",
    description: "Actors to help with your Medival parties!",
    title: "Fort Knights",
    votes: 222
  },
  {
    id: "2f616e97-f848-4893-b36c-b747760d0bd1",
    description: "Turning your car from blah to bling!",
    title: "Drop Top Customs",
    votes: 19
  },
  {
    id: "6161c1b6-d530-4b6b-9cd7-cbbedb4b1c3a",
    description: "Fashionable headwear for the conspiracy theorist in you!",
    title: "Tin Foil Hats",
    votes: 13
  },
  {
    id: "9c7205d7-93f9-4bb4-bc32-c951fdc886ea",
    description: "The best food in the kingdom, brought to your door!",
    title: "Gilded Rose Catering",
    votes: 21
  }
];

export default LocalData;
