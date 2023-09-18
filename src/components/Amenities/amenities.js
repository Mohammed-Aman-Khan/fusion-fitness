import { FaDumbbell, FaRunning, FaSwimmingPool } from "react-icons/fa";
import { GiStrongMan } from "react-icons/gi";
import { SiLoop } from "react-icons/si";
import { BsThermometerSun } from "react-icons/bs";
import { TbMassage } from "react-icons/tb";
import {
  FaBowlFood,
  FaPeopleGroup,
  FaHandshakeSimple,
  FaHandsHoldingChild,
  FaWifi,
  FaStore,
} from "react-icons/fa6";
import { PiLockersFill } from "react-icons/pi";
import { MdStadium } from "react-icons/md";

const STATE_OF_THE_ART = {
  title: "State-of-the-Art Equipment",
  icon: <FaDumbbell size={25} />,
};

const PERSONAL_TRAINING = {
  title: "Personal Training",
  icon: <FaHandshakeSimple size={25} />,
};

const GROUP_FITNESS_CLASSES = {
  title: "Group Fitness Classes",
  icon: <FaPeopleGroup size={25} />,
};

const CARDIO_ZONE = {
  title: "Cardio Zone",
  icon: <FaRunning size={25} />,
};

const STRENGTH_TRAINING = {
  title: "Strength Training",
  icon: <GiStrongMan size={25} />,
};

const INDOOR_TRACK = {
  title: "Indoor Track",
  icon: <SiLoop size={25} />,
};

const SAUNA_AND_STEAM = {
  title: "Sauna & Steam",
  icon: <BsThermometerSun size={25} />,
};

const HYDROTHERAPY_POOLS = {
  title: "Hydrotherapy Pools",
  icon: <FaSwimmingPool size={25} />,
};

const MASSAGE_THERAPY = {
  title: "Massage Therapy",
  icon: <TbMassage size={25} />,
};

const NUTRITION_COUNSELING = {
  title: "Nutrition Counseling",
  icon: <FaBowlFood size={25} />,
};

const CHILD_CARE_SERVICES = {
  title: "Childcare Services",
  icon: <FaHandsHoldingChild size={25} />,
};

const LOCKER_ROOMS = {
  title: "Locker Rooms",
  icon: <PiLockersFill size={25} />,
};

const FREE_WIFI = {
  title: "Free Wi-Fi",
  icon: <FaWifi size={25} />,
};

const NUTRITION_STORE = {
  title: "Nutrition Store",
  icon: <FaStore size={25} />,
};

const OUTDOOR_TRAINING_AREA = {
  title: "Outdoor Training Area",
  icon: <MdStadium size={25} />,
};

export const AMENITIES = [
  STATE_OF_THE_ART,
  PERSONAL_TRAINING,
  GROUP_FITNESS_CLASSES,
  CARDIO_ZONE,
  STRENGTH_TRAINING,
  INDOOR_TRACK,
  SAUNA_AND_STEAM,
  HYDROTHERAPY_POOLS,
  MASSAGE_THERAPY,
  NUTRITION_COUNSELING,
  CHILD_CARE_SERVICES,
  LOCKER_ROOMS,
  FREE_WIFI,
  NUTRITION_STORE,
  OUTDOOR_TRAINING_AREA,
];
