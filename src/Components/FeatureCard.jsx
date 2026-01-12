import React from "react";

const FeatureCard = ({
  title,
  description,
  icon,
  headerColor = "",
  cardColor = "",
  iconColor = "",
}) => {
  return (
    <div className={`${cardColor} rounded-lg flex flex-col gap-5`}>
      {/* Title */}
      <p
        className={`text-lg font-bold ${headerColor} rounded-md text-center p-4`}
      >
        {title}
      </p>

      {/* Icon */}
      <div
        className={`${cardColor} p-2 mx-5 w-fit rounded-md`}
        style={{ color: iconColor }}
      >
        {icon}
      </div>

      {/* Description */}
      <p className="text-dark-grey leading-relaxed mx-5 mb-5 whitespace-pre-line">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;
