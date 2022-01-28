import React from "react";

function FacebookIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <g clipPath="url(#clip0_2_40)" filter="url(#filter0_d_2_40)">
        <path
          fill="#059BE5"
          d="M24 12.073C24 5.404 18.627 0 12 0 5.37 0-.003 5.405-.003 12.075c0 6.026 4.389 11.02 10.125 11.927v-8.438H7.077v-3.489h3.048V9.413c0-3.026 1.793-4.697 4.533-4.697 1.314 0 2.687.236 2.687.236v2.97H15.83c-1.49 0-1.954.931-1.954 1.887v2.264h3.326l-.53 3.49h-2.798V24C19.611 23.094 24 18.099 24 12.073z"
        ></path>
      </g>
      <defs>
        <filter
          id="filter0_d_2_40"
          width="32.003"
          height="32.003"
          x="-4.003"
          y="-0.001"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset dy="4"></feOffset>
          <feGaussianBlur stdDeviation="2"></feGaussianBlur>
          <feComposite in2="hardAlpha" operator="out"></feComposite>
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_2_40"
          ></feBlend>
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_2_40"
            result="shape"
          ></feBlend>
        </filter>
        <clipPath id="clip0_2_40">
          <rect width="24" height="24" fill="#fff" rx="12"></rect>
        </clipPath>
      </defs>
    </svg>
  );
}

export default FacebookIcon;