import React from "react";
import "./ContentList.css";
import HeroButton from "./HeroButton";
import Thumbnail from "./Thumbnail";
import WatchAgain from "./WatchAgain";

export default function ContentList() {
  return (
    <div className="content-listouter flex-col">
      <div className="cl_text-container flex-row-vcenter">
        <p className="cl_txt-973">💪🏼 Week 1 | Form and Technique</p>
      </div>
      <div className="flex-col">
        <div className="list-horizontal flex-col-vcenter">
          <div className="video-item flex-row-vcenter">
            <Thumbnail />
            <div className="frame-63 flex-col">
              <p className="dayheading">Day 1 | EMOM</p>
              <p className="txt-222">
                Get those muscles moving with your first 15 minute warm-up. You
                got this!
              </p>
            </div>
            <WatchAgain />
          </div>
        </div>
      </div>
      <div className="flex-col">
        <div className="list-horizontal flex-col-vcenter">
          <div className="video-item flex-row-vcenter">
            <Thumbnail />
            <div className="frame-63 flex-col">
              <p className="dayheading">Day 2 | Lower Body Power</p>
              <p className="txt-222">
                Get those muscles moving with your first 15 minute warm-up. You
                got this!
              </p>
            </div>
            <WatchAgain />
          </div>
        </div>
      </div>
      <div className="flex-col">
        <div className="list-horizontal flex-col-vcenter">
          <div className="video-item flex-row-vcenter">
            <Thumbnail />
            <div className="frame-63 flex-col">
              <p className="dayheading">Day 3 | Rest & Recovery</p>
              <p className="txt-222">
                Get those muscles moving with your first 15 minute warm-up. You
                got this!
              </p>
            </div>
            <div>
              <WatchAgain />
            </div>
          </div>
        </div>
      </div>
      <div className="flex-col">
        <div className="list-horizontal flex-col-vcenter">
          <div className="video-item flex-row-vcenter">
            <Thumbnail />
            <div className="frame-63 flex-col">
              <p className="dayheading">Day 4 | Tabata</p>
              <p className="txt-222">
                Get those muscles moving with your first 15 minute warm-up. You
                got this!
              </p>
            </div>
            <div>
              <WatchAgain />
            </div>
          </div>
        </div>
      </div>
      <div className="flex-col">
        <div className="list-horizontal flex-col-vcenter">
          <div className="video-item flex-row-vcenter">
            <Thumbnail />
            <div className="frame-63 flex-col">
              <p className="dayheading">Day 5 | Rest Day</p>
              <p className="txt-222">
                Get those muscles moving with your first 15 minute warm-up. You
                got this!
              </p>
            </div>
            <HeroButton />
          </div>
        </div>
      </div>
    </div>
  );
}
