import GradientText from "./GradientText";

const Footer = () => (
  <footer className="w-full bg-gray-100 border-t border-gray-200 py-6 text-center text-sm text-gray-500 mt-12">
    <span>
      <GradientText colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]} animationSpeed={3} showBorder={false}>
        &copy; {new Date().getFullYear()} Pooria Mohammad Doust. All rights reserved.
      </GradientText>
    </span>
  </footer>
);

export default Footer; 