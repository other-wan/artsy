import ViewIcon from "components/common/ViewIcon";
import { FunctionComponent } from "react";

interface IChevron {
  className?: string;
}

const Chevron: FunctionComponent<IChevron> = ({ className }) => {
  return (
    <ViewIcon
      path={
        <path
          d="M0.352185 0.344159C0.577756 0.123794 0.883656 0 1.20262 0C1.52157 0 1.82747 0.123794 2.05305 0.344159L8.00726 6.16269L13.9615 0.344159C14.1883 0.130039 14.4922 0.0115592 14.8076 0.0142373C15.123 0.0169155 15.4247 0.140538 15.6477 0.358478C15.8707 0.576418 15.9972 0.871238 16 1.17944C16.0027 1.48764 15.8815 1.78457 15.6623 2.00626L8.85769 8.65584C8.63212 8.87621 8.32622 9 8.00726 9C7.6883 9 7.3824 8.87621 7.15683 8.65584L0.352185 2.00626C0.126681 1.78583 0 1.4869 0 1.17521C0 0.863519 0.126681 0.564591 0.352185 0.344159Z"
          fill="#2F2F2F"
        />
      }
      className={className}
      mobileSize={{ width: 16, height: 9 }}
      laptopSize={{ width: 16, height: 9 }}
      viewBox="0 0 16 9"
    />
  );
};

export default Chevron;
