import { FC } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Skeleton from "@mui/material/Skeleton";
import "./skeleton.scss"

export const PostsSkeleton: FC = () => {
  return (
    <div className="posts">
      <div className="posts__textContainer">
        <div className="posts__header">
          <Skeleton variant="text" width={360} />
        </div>
        <div className="posts__text">
          <Skeleton variant="rectangular" width={360} height={80} />
        </div>
        <div className="posts__dateContainer">
          <div className="posts__date">
            <Skeleton variant="text" width={172} />
          </div>
          <div className="posts__iconContainer">
            <div className="posts__number">
              <Skeleton variant="text" width={26} />
            </div>
            <VisibilityIcon className="posts__icon" />
          </div>
        </div>
      </div>
      <Skeleton variant="rectangular" className="posts__img" />
    </div>
  );
};
