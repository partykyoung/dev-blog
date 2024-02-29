import { Button } from "@/shared/uis/button";

import {
  postMoreButtonRoot,
  postMoreButtonText,
} from "./post-more-button.module.css";

type Props = {
  onClick: () => void;
};

function PostMoreButton({ onClick }: Props) {
  return (
    <Button type="button" className={postMoreButtonRoot} onClick={onClick}>
      <span className={postMoreButtonText}>더보기</span>
    </Button>
  );
}

export { PostMoreButton };
