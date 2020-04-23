import React, { FC, useState, useMemo } from "react";
import { IProduct } from "../../_core/interfaces/interface";
import "./product_card_component.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart as fasFaHeart,
  faBookmark as fasFaBookmark,
  faShareAlt as FasFaShareAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
  faHeart as farFaHeart,
  faBookmark as farFaBookmark,
} from "@fortawesome/free-regular-svg-icons";
import { DateUtil } from "src/_core/utils/date_util";

type Props = {
  product: IProduct;
};

const ProductCardComponent: FC<Props> = (props) => {
  const [isLike, setIsLike] = useState(false);
  const [isBookmark, setIsBookmark] = useState(false);
  const { name, img_src, provider, tags, url, released_at } = props.product;
  const released_at_st = useMemo(
    () =>
      released_at
        ? DateUtil.format(new Date(released_at.toDate()), "YYYY.MM.DD")
        : null,
    []
  );

  const like = () => {
    setIsLike(!isLike);
  };
  const bookmark = () => {
    setIsBookmark(!isBookmark);
  };

  const actionArea = useMemo(() => {
    return (
      <div className="card_action">
        <div className="card_icon_wraper">
          <FontAwesomeIcon
            icon={isLike ? fasFaHeart : farFaHeart}
            onClick={like}
            className={`card_icon ${isLike ? "like" : ""}`}
          />
        </div>
        <div className="card_icon_wraper">
          <FontAwesomeIcon
            icon={isBookmark ? fasFaBookmark : farFaBookmark}
            onClick={bookmark}
            className={`card_icon ${isBookmark ? "bookmark" : ""}`}
          />
        </div>
        <div className="card_icon_wraper">
          <FontAwesomeIcon icon={FasFaShareAlt} className="card_icon" />
        </div>
      </div>
    );
  }, [isLike, isBookmark]);

  const tagArea = useMemo(() => {
    return (
      <div className="card_tags">
        {tags &&
          tags.map((tag) => (
            <div key={tag} className="card_tag">{`#${tag}`}</div>
          ))}
      </div>
    );
  }, []);

  return (
    <div className="card">
      <div className="card_main">
        <div className="card_left">
          <div className="card_title">
            <div className="card_name">{name}</div>
            <div className="card_desc">
              <a href={url} className="card_desc" target="_blank">
                {provider}
              </a>
              {released_at_st && ` / ${released_at_st}`}
            </div>
          </div>
          {tagArea}
        </div>
        <div className="card_right">
          <img className="card_image" src={img_src} />
        </div>
      </div>
      {actionArea}
    </div>
  );
};

export default ProductCardComponent;
