import Earth_C137Img from "../../assets/locations/Earth_C137.jpg";
import AbadangoImg from "../../assets/locations/Abadango.jpg";
import Citadel_of_RicksImg from "../../assets/locations/Citadel_of_Ricks.jpg";
import Worldender_s_LairImg from "../../assets/locations/Worldender_Lair.jpg";
import Anatomy_ParkImg from "../../assets/locations/Anatomy_Park.jpg";
import Interdimensional_CableImg from "../../assets/locations/Interdimensional_Cable.jpg";
import Immortality_Field_ResortImg from "../../assets/locations/Immortality_Field_Resort.jpg";
import Post_Apocalyptic_EarthImg from "../../assets/locations/Post-Apocalyptic-Earth.jpg";
import Purge_PlanetImg from "../../assets/locations/Purge_Planet.jpg";
import Venzenulon_7Img from "../../assets/locations/Venzenulon_7.jpg";
import Bepis_9 from "../../assets/locations/Bepis_9.jpg";
import Cronenberg_EarthImg from "../../assets/locations/Cronenberg_Earth.jpg";
import Bird_WorldImg from "../../assets/locations/bird_world.jpg";
import Giant_TownImg from "../../assets/locations/Giant_Town.jpg";
import Gromflom_PrimeImg from "../../assets/locations/Gromflom_Prime.jpg";
import MrGoldenfold_DreamImg from "../../assets/locations/MrGoldenfold_Dream.jpg";
import Nuptia_4Img from "../../assets/locations/Nuptia_4.jpg";
import Replacement_DimensionImg from "../../assets/locations/Replacement_Dimension.jpg";
import StGloopy_Noops_HospitalImg from "../../assets/locations/StGloopy_Noops_Hospital.jpg";
import Earth_5126 from "../../assets/locations/Earth_(5-126).jpg";

const locationImages = {
  "Earth (C-137)": Earth_C137Img,
  Abadango: AbadangoImg,
  "Citadel of Ricks": Citadel_of_RicksImg,
  "Worldender's lair": Worldender_s_LairImg,
  "Anatomy Park": Anatomy_ParkImg,
  "Interdimensional Cable": Interdimensional_CableImg,
  "Immortality Field Resort": Immortality_Field_ResortImg,
  "Post-Apocalyptic Earth": Post_Apocalyptic_EarthImg,
  "Purge Planet": Purge_PlanetImg,
  "Venzenulon 7": Venzenulon_7Img,
  "Bepis 9": Bepis_9,
  "Cronenberg Earth": Cronenberg_EarthImg,
  "Bird World": Bird_WorldImg,
  "Giant's Town": Giant_TownImg,
  "Gromflom Prime": Gromflom_PrimeImg,
  "Mr. Goldenfold's dream": MrGoldenfold_DreamImg,
  "Nuptia 4": Nuptia_4Img,
  "Earth (Replacement Dimension)": Replacement_DimensionImg,
  "St. Gloopy Noops Hospital": StGloopy_Noops_HospitalImg,
  "Earth (5-126)": Earth_5126,
};

export const getLocationImage = (locationName) => {
  return locationImages[locationName] || null;
};

export default locationImages;
