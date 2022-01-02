import React from "react"
import HeroButton from "./HeroButton"
import "./Resume_Dark.css"

export default function Resume_Dark() {
  return (
    <div className="rd_default rd_flex-col">
      <div className="rd_list-horizontal rd_flex-col-vcenter">
        <div className="rd_video-item rd_flex-row-vcenter">
          <div className="rd_thumbnail">
            <div className="rd_rectangle-3266" />
            <div className="rd_timestamp">
              <p className="rd_txt-672">40:08</p>
            </div>
            <img
              src="https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/029e/0c5e/54d3e7fec82f850e7a7c93774edebb3d"
              alt="image not found"
              className="playarrow"
            />
            <img src = "..\public\Thumbnail.png" 
            />
          </div>
          <div className="rd_frame-63 rd_flex-col">
            <p className="rd_txt-278">Day 1 | Full Body Warmup</p>
            <p className="rd_txt-849">
              Get those muscles moving with your first 15 minute warm-up. You
              got this!
            </p>
          </div>
          <HeroButton className = "hero-button"/>
        </div>
      </div>
    </div>
  )
}
