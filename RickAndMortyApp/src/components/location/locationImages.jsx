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
import Dorian_5 from "../../assets/locations/Dorian_5.jpg";
import Earth_Evil_Ricks_Target_Dimension from "../../assets/locations/Earth_(Evil_Ricks_Target_Dimension).jpg";
import Earth_J19ζ7 from "../../assets/locations/Earth_(J19ζ7).jpg";
import Earth_K83 from "../../assets/locations/Earth_(K83).jpg";
import Earth_UnknownDimension from "../../assets/locations/Earth_(UnknownDimension).jpg";
import Earth_C500A from "../../assets/locations/Earth_C500A.jpg";
import Eric_Stoltz_Mask_Earth from "../../assets/locations/Eric_Stoltz_Mask_Earth.jpg";
import Galactic_Federation_Prison from "../../assets/locations/Galactic_Federation_Prison.jpg";
import Gazorpazorp from "../../assets/locations/Gazorpazorp.jpg";
import Glaagablaaga from "../../assets/locations/Glaagablaaga.jpg";
import Hideout_Planet from "../../assets/locations/Hideout_Planet.jpg";
import Interdimensional_Customs from "../../assets/locations/Interdimensional_Customs.jpg";
import Planet_Squanch from "../../assets/locations/Planet_Squanch.jpg";
import Resort_Planet from "../../assets/locations/Resort_Planet.jpg";
import Rick_Battery_Microverse from "../../assets/locations/Rick_Battery_Microverse.jpg";
import Roy_A_Life_Well_Lived from "../../assets/locations/Roy_A_Life_Well_Lived.jpg";
import Signus5_Expanse from "../../assets/locations/Signus5_Expanse.jpg";
import Testicle_Monster_Dimension from "../../assets/locations/Testicle_Monster_Dimension.jpg";
import The_Managerie from "../../assets/locations/The_Managerie.jpg";
import Unitys_Planet from "../../assets/locations/Unitys_Planet.jpg";

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
  "Dorian 5": Dorian_5,
  "Earth (Evil Rick's Target Dimension)": Earth_Evil_Ricks_Target_Dimension,
  "Earth (J19ζ7)": Earth_J19ζ7,
  "Earth (K-83)": Earth_K83,
  "Earth (Unknown dimension)": Earth_UnknownDimension,
  "Earth (C-500A)": Earth_C500A,
  "Eric Stoltz Mask Earth": Eric_Stoltz_Mask_Earth,
  "Galactic Federation Prison": Galactic_Federation_Prison,
  Gazorpazorp: Gazorpazorp,
  Glaagablaaga: Glaagablaaga,
  "Hideout Planet": Hideout_Planet,
  "Interdimensional Customs": Interdimensional_Customs,
  "Planet Squanch": Planet_Squanch,
  "Resort Planet": Resort_Planet,
  "Rick's Battery Microverse": Rick_Battery_Microverse,
  "Roy: A Life Well Lived": Roy_A_Life_Well_Lived,
  "Signus 5 Expanse": Signus5_Expanse,
  "Testicle Monster Dimension": Testicle_Monster_Dimension,
  "The Menagerie": The_Managerie,
  "Unity's Planet": Unitys_Planet,
};

export const getLocationImage = (locationName) => {
  return locationImages[locationName] || null;
};

export default locationImages;
