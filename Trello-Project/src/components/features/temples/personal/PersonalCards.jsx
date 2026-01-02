import React from "react";
import { MdOutlineFileCopy } from "react-icons/md";
import { IoEyeOutline } from "react-icons/io5";
import pcardone from "../../../../assets/pcardone.jpg";
import pcardonelogo from "../../../../assets/pcardonelogo.png";
import pcardtwo from "../../../../assets/pcardtwo.png";
import pcardtwologo from "../../../../assets/pcardtwologo.png";
import pcardthree from "../../../../assets/pcardthree.png";
import pcardthreelogo from "../../../../assets/pcardthreelogo.png";
import pcardfour from "../../../../assets/bcardfour.jpg";
import pcardfourlogo from "../../../../assets/pcardfourlogo.png";
import pcardfive from "../../../../assets/pcardfive.jpg";
import pcardfivelogo from "../../../../assets/pcardfivelogo.png";
import pcardsix from "../../../../assets/pcardsix.jpg";
import pcardsixlogo from "../../../../assets/pcardsixlogo.png";
import pcardseven from "../../../../assets/pcardseven.jpg";
import pcardeight from "../../../../assets/pcardeight.svg";
import pcardnine from "../../../../assets/pcardnine.jpg";
import pcardninelogo from "../../../../assets/pcardninelogo.png";
import pcardten from "../../../../assets/pcardten.jpg";
import pcardtenlogo from "../../../../assets/pcardtenlogo.png";
import pcardeleven from "../../../../assets/pcardeleven.jpg";
import pcardelevenlogo from "../../../../assets/pcardelevenlogo.png";
import pcardtweleve from "../../../../assets/pcardtweleve.jpg";
import pcardtwelevelogo from "../../../../assets/pcardtwelevelogo.png";
import pcardthirteen from "../../../../assets/pcardthirteen.jpg";
import pcardthirteenlogo from "../../../../assets/pcardthirteenlogo.png";
import pcardfourteen from "../../../../assets/pcardfourteen.jpg";
import pcardfourteenlogo from "../../../../assets/pcardfourteenlogo.png";
import pcardfifteen from "../../../../assets/pcardfifteen.jpg";
import pcardsixteen from "../../../../assets/pcardsixteen.png";
import pcardsixteenlogo from "../../../../assets/pcardsixteenlogo.png";
import bcardseventeenlogo from "../../../../assets/bcardseventeenlogo.png";
import familybg from "../../../../assets/familybg.jpg";
import familybglogo from "../../../../assets/familybglogi.png";
import passion from "../../../../assets/passion.png";
import passionlogo from "../../../../assets/passionlogo.png";
import goal from "../../../../assets/goal.jpg";
import goallogo from "../../../../assets/goallogo.png";
import goaltwo from "../../../../assets/goaltwo.jpg";
import goaltwologo from "../../../../assets/goaltwologo.png";
import goalthree from "../../../../assets/goalthree.jpg";
import goalthreelogo from "../../../../assets/goalthreelogo.png";
import grocery from "../../../../assets/grocery.jpg";
import house from "../../../../assets/house.jpg";
import houselogo from "../../../../assets/houselogo.png";
import leaf from "../../../../assets/leaf.jpg";
import leaflogo from "../../../../assets/leaflogo.png";
import interview from "../../../../assets/interview.jpg";
import interviewlogo from "../../../../assets/interviewlogo.png";
import kitchen from "../../../../assets/kitchen.jpg";
import lifestyle from "../../../../assets/lifestyle.jpg";
import lifestylelogo from "../../../../assets/lifestylelogo.png";
import meal from "../../../../assets/meal.jpg";
import food from "../../../../assets/food.jpg";
import foodlogo from "../../../../assets/foodlogo.png";

const cardsData = [
  {
    id: "/templates/personal/dating-funnel-template-yt50H2Dx",
    mainImage: pcardone,
    logoImage: pcardonelogo,
    title: "Dating Funnel Template",
    author: "by Alex Kruger, Business & Comedy Writer ",
    description: "An agile process for falling in love.",
    copies: "2.9K",
    views: "38.4K",
  },
  {
    id: "/templates/personal/where-to-next:-travel-inspiration-board-8ykctyqk",
    mainImage: pcardtwo,
    logoImage: pcardtwologo,
    title: "Where to next: Travel inspiration board",
    author: "by Skyscanner",
    description: "Use this template to start planning your next dream trip ✈️",
    copies: "7.8K",
    views: "32.1K",
  },
  {
    id: "/templates/personal/guided-gratitude-practice-WTS81y29",
    mainImage: pcardthree,
    logoImage: pcardthreelogo,
    title: "Guided Gratitude Practice",
    author: "by Sarah Goff-Dupont, Principal Writer @ Atlassian",
    description: "Establish a personal or group gratitude practice.",
    copies: "5.8K",
    views: "27.2K",
  },
  {
    id: "/templates/personal/my-climate-action-plan-(mycap)-SpzOkSAf",
    mainImage: pcardfour,
    logoImage: pcardfourlogo,
    title: "My Climate Action Plan (MyCAP)",
    author: "by Business Council on Climate Change",
    description:
      "Take action to protect our planet, both at work and at home. ",
    copies: "3.1K",
    views: "20.7K",
  },
  {
    id: "/templates/personal/writing-a-book-XAOC4oWL",
    mainImage: pcardfive,
    logoImage: pcardfivelogo,
    title: "Writing A Book",
    author: "by Rani Shah, Content & Social Media Manager @ Trello ",
    description:
      "Whether it's an epic novel or a children's book, we've got you covered with a template that can help you along your",
    copies: "14.8K",
    views: "56K",
  },
  {
    id: "/templates/personal/home-purchase-template-jpqpc0i6",
    mainImage: pcardsix,
    logoImage: pcardsixlogo,
    title: "Home Purchase Template",
    author: "by Peter, First Time Home Buyer",
    description:
      "Use Trello to track and manage all of the things you need to do  to buy your first home.",
    copies: "3.7K",
    views: "24.2K",
  },
  {
    id: "/templates/personal/meal-planning-k8QGrXTs",
    mainImage: pcardseven,
    logoImage: pcardsixlogo,
    title: "Meal Planning",
    author: "by Kristen Franks, Owner @ Frankly Organized",
    description:
      "Free up your time and energy with this Meal Planning board. Customize as needed.",
    copies: "19.3K",
    views: "63.4K",
  },
  {
    id: "/templates/personal/tier-list-blYESI0b",
    mainImage: pcardeight,
    logoImage: bcardseventeenlogo,
    title: "Tier List",
    author: "by Trello Engineering Team",
    description:
      "Use this template to create a tier list for anything you want. A tier list is a way to rank items in a category from best to",
    copies: "2.9K",
    views: "23.3K",
  },
  {
    id: "/templates/personal/4-ls-exercise-Bay7DwxN",
    mainImage: pcardnine,
    logoImage: pcardninelogo,
    title: "4 Ls Exercise",
    author: "by Dom Price, Work Futurist @ Atlassian",
    description:
      "How do you be the best version of you? The 4 L's exercise is designed for you as a leader/role model.",
    copies: "4.5K",
    views: "42.9K",
  },
  {
    id: "/templates/personal/apartment-search-template-iBEGNLEY",
    mainImage: pcardten,
    logoImage: pcardtenlogo,
    title: "Apartment Search Template",
    author: "by Robyn Hendrix",
    description: "Organize your search for a rental apartment or house.",
    copies: "3.8K",
    views: "16.7K",
  },
  {
    id: "/templates/personal/book-clubs-tP0ROvp8",
    mainImage: pcardeleven,
    logoImage: pcardelevenlogo,
    title: "Book Clubs",
    author: "by Brian Cervino, Product Marketing @ Trello",
    description:
      "Keep your book club on the same page, vote on the book you're reading next!",
    copies: "9.5K",
    views: "71.5K",
  },
  {
    id: "/templates/personal/budget-template-VhDsuy74",
    mainImage: pcardtweleve,
    logoImage: pcardtwelevelogo,
    title: "Budget Template",
    author: "by Cedrik Bell, budget extraordinaire",
    description: "Track monthly expenses and recurring charges.",
    copies: "20.2K",
    views: "83.5K",
  },
  {
    id: "/templates/personal/christmas-planner-pqaL0m0C",
    mainImage: pcardthirteen,
    logoImage: pcardthirteenlogo,
    title: "Christmas Planner",
    author: "by Leah Ryder, Trello Brand Marketing Senior Team Lead",
    description:
      "Get into the holiday spirit with less stress and more sparkle ✨",
    copies: "6.1K",
    views: "24.3K",
  },
  {
    id: "/templates/personal/commission-queue-for-artists-lhwwtQb6",
    mainImage: pcardfourteen,
    logoImage: pcardfourteenlogo,
    title: "Commission Queue for Artists",
    author: "by DerpyOlives, Artist",
    description:
      "Attention artists! Use this template to manage your backlog of upcoming projects, keep tabs on your",
    copies: "4.4K",
    views: "14.9K",
  },
  {
    id: "/templates/personal/daily-tasks-planner-qhQ4j8bT",
    mainImage: pcardfifteen,
    logoImage: pcardsixlogo,
    title: "Daily Tasks Planner",
    author: "by Anurag, System Architect @ Dynasense Technologies",
    description:
      "Declutter your life with the Daily Task Planner Template. Plan for daily or weekly tasks and reward consistency with the",
    copies: "80.7K",
    views: "249.3K",
  },
  {
    id: "/templates/personal/discover-the-best-of-new-york-city-in-48-hours-NqInvfb4",
    mainImage: pcardsixteen,
    logoImage: pcardsixteenlogo,
    title: "Discover the best of  New York City in 48 hours",
    author: "by GetYourGuide",
    description:
      "Check out this sample itinerary for exploring the best NYC has to offer in a mere 48 hours.",
    copies: "2.4K",
    views: "14.2K",
  },
  {
    id: "/templates/travel/nyc-48-hours",
    mainImage: pcardsixteen,
    logoImage: pcardsixteenlogo,
    title: "Discover the best of New York City in 48 hours",
    author: "by GetYourGuide",
    description:
      "Check out this sample itinerary for exploring the best NYC has to offer in a mere 48 hours.",
    copies: "2.4K",
    views: "14.2K",
  },
  {
    id: "/templates/travel/paris-48-hours",
    mainImage: pcardsixteen,
    logoImage: pcardsixteenlogo,
    title: "Discover the best of Paris in 48 hours",
    author: "by GetYourGuide",
    description:
      "Check out this sample itinerary for exploring the best Paris has to offer in a mere 48 hours.",
    copies: "1.1K",
    views: "4.8K",
  },
  {
    id: "/templates/personal/milano-by-food-jFa3vtof",
    mainImage: food,
    logoImage: foodlogo,
    title: "Milano by food",
    author: "by Lorenzo Allievi, Project Manager @ Eataly",
    description:
      "An ongoing collection of my favorite cuisines and restaurants in Milan, Italy.",
    copies: "1K",
    views: "12.5K",
  },
  {
    id: "/templates/personal/meal-planning-board-yCgLRjHj",
    mainImage: meal,
    logoImage: lifestylelogo,
    title: "Meal Planning Board",
    author: "by Brian Cervino, Product Marketing @ Trello",
    description: "Because your recipes need a repository!",
    copies: "27.6K",
    views: "167.3K",
  },
  {
    id: "/templates/personal/lifestyle-goals-(living-room-remodel)-OjEtPqx6",
    mainImage: lifestyle,
    logoImage: lifestylelogo,
    title: "Lifestyle Goals (Living Room Remodel)",
    author: "by Brit + Co",
    description: "Add cards to map out and plan your goals.",
    copies: "10.8K",
    views: "91.3K",
  },
  {
    id: "/templates/personal/kitchen-project-4Y0idQQT",
    mainImage: kitchen,
    logoImage: houselogo,
    title: "Kitchen Project",
    author: "by Trello Marketing Team",
    description:
      "Whether it’s a room refresh or a full-blown remodel, a Trello board is the best way to stay on top of every little detail.",
    copies: "7.3K",
    views: "57.2K",
  },
  {
    id: "/templates/personal/interview-study-tracker-5g9FvwSF",
    mainImage: interview,
    logoImage: interviewlogo,
    title: "Interview Study Tracker",
    author: "by Esco Obong, Senior Software Engineer @ Uber",
    description:
      "Track your progress and keep organized when studying for job interviews.",
    copies: "12.1K",
    views: "37.7K",
  },
  {
    id: "/templates/personal/houseplant-tracking-template-🌱-EkzpRHgz",
    mainImage: leaf,
    logoImage: leaflogo,
    title: "Houseplant Tracking Template 🌱",
    author: "by Jennie Yip, Designer @ Atlassian",
    description:
      "Use this template to track your houseplants by following their growth, care, and other details.",
    copies: "2.9K",
    views: "12K",
  },
  {
    id: "/templates/personal/household-chores-wqQ40ir4",
    mainImage: house,
    logoImage: houselogo,
    title: "Household Chores",
    author: "by Trello Marketing Team",
    description: "An easy way to organize your household chores.",
    copies: "13.3K",
    views: "42.7K",
  },
  {
    id: "/templates/personal/groceries-template-lBAZ2RWP",
    mainImage: grocery,
    logoImage: "",
    title: "Groceries Template",
    author: "by Crux, a guy who loves lists.",
    description: "A basic groceries template that you can slide items around.",
    copies: "7.1K",
    views: "24.8K",
  },
  {
    id: "/templates/personal/goals-and-tasks---personal-life-XwF9qoLR",
    mainImage: goalthree,
    logoImage: goalthreelogo,
    title: "Goals and Tasks - Personal Life",
    author: "by Kristen Koning, Data Analytics Manager @ Ascension",
    description:
      "Attractive, simple board for tracking goals, tasks, longer term projects, and other loose ends across your personal life.",
    copies: "18.7K",
    views: "102.5K",
  },
  {
    id: "/templates/personal/goal-setting-basics-HEwcplGR",
    mainImage: goaltwo,
    logoImage: goaltwologo,
    title: "Goal Setting Basics",
    author: "by Sam Gravener, Blogger @ Here I Mum Again",
    description:
      "A simple introduction to Trello as well as an effective Goal Tracking System.",
    copies: "23.9K",
    views: "104.7K",
  },
  {
    id: "/templates/personal/goal-achievement-board-41BsFLpq",
    mainImage: goal,
    logoImage: goallogo,
    title: "GOAL ACHIEVEMENT BOARD",
    author: "by Kasey Cooper, CEO/Life Coach",
    description:
      "Effectively keep track of your goals and progress for each quarter.",
    copies: "13.6K",
    views: "56.2K",
  },
  {
    id: "/templates/personal/find-your-passion-in-life-VwiSUz2D",
    mainImage: passion,
    logoImage: passionlogo,
    title: "Find Your Passion in Life",
    author: "by Samantha Dee, Life Coach",
    description: "Questions to help you discover your passion.",
    copies: "6.4K",
    views: "35.2K",
  },
  {
    id: "/templates/personal/family-adventure-board-UWdZAv8M",
    mainImage: familybg,
    logoImage: familybglogo,
    title: "Family Adventure Board",
    author: "by Hannah Hiles, Project Manager",
    description:
      "This board helps me and my family keep track of all the fun things we want to do when we're not working!",
    copies: "7.1K",
    views: "31.7K",
  },
];

const PersonalCards = () => {
  const handleNavigate = (id) => {
    window.location.href = id;
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {cardsData.map((card) => (
        <div
          key={card.id}
          onClick={() => handleNavigate(card.id)}
          className="relative flex flex-col border border-gray-300 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 bg-white cursor-pointer overflow-hidden"
        >
          {/* Image Section */}
          <div className="relative h-40 w-full">
            <img
              src={card.mainImage}
              alt="Main"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-2 left-2 border border-black bg-black w-12 h-12 rounded-full flex items-center justify-center">
              <img
                src={card.logoImage}
                alt="Logo"
                className="w-10 h-10 object-contain rounded-full"
              />
            </div>
          </div>

          {/* Text Section */}
          <div className="flex flex-col px-3 py-2 h-full justify-between">
            <div>
              <p className="text-sm font-semibold leading-snug">{card.title}</p>
              <p className="text-gray-500 text-xs">{card.author}</p>
              <p className="text-xs text-gray-700 leading-tight mt-1">
                {card.description}
              </p>
            </div>
            <div className="flex items-center gap-3 text-xs font-medium pt-2">
              <span className="flex items-center gap-1">
                <MdOutlineFileCopy className="text-sm" />
                {card.copies}
              </span>
              <span className="flex items-center gap-1">
                <IoEyeOutline className="text-sm" />
                {card.views}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PersonalCards;
