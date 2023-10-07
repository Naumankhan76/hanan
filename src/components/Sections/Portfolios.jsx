import React, { useState, useEffect } from "react";
import Portfolio from "../Items/Portfolio";

const filters = [
  {
    id: 1,
    name: "",
  },
  
];

const allData = [
  
  
  {
    id: 0,
    name: "Branding",
    category: ["#BrandIdentity #CustomerExperience"],
    image: "images/portfolio/cafinistathumb.png",
    slug: "branding-cafinista",
  },
  
  {
    id: 1,
    name: "Video Editing",
    category: ["#recording #postprocessing"],
    image: "images/portfolio/1.jpg",
    slug: "Video-Editing",
  },
  {
    id: 2,
    name: "UI Design",
    category: ["#concept #art"],
    image: "images/portfolio/2.jpg",
    slug: "UI-Design",
  },
  {
    id: 3,
    name: "Crypto Sticker Packs",
    category: ["#Crypto #telegram #stickers"],
    image: "images/portfolio/3.jpg",
    slug: "Crypto-Stickers",
  },
  {
    id: 4,
    name: "Menu Design",
    category: ["#menu #resturant #bakery"],
    image: "images/portfolio/4.jpg",
    slug: "menu-design",
  },
  {
    id: 5,
    name: "3D Product Design",
    category: ["#3D #ProductDesign"],
    image: "images/portfolio/5.jpg",
    slug: "3DVarnaBuildings",
  },
  {
    id: 6,
    name: "Printable",
    category: ["#Printready #calendar"],
    image: "images/portfolio/6.jpg",
    slug: "custom-calendar",
  },
  {
    id: 7,
    name: "3D Isometric Room",
    category: ["#3D #isometric"],
    image: "images/portfolio/7.jpg",
    slug: "3DIsometricRoom",
  },
  {
    id: 8,
    name: "Apple USB",
    category: ["creative", "design"],
    image: "images/portfolio/2.jpg",
    slug: "apple-usb",
  },
  
];

function Portfolios() {
  const [getAllItems] = useState(allData);
  const [dataVisibleCount, setDataVisibleCount] = useState(6);
  const [dataIncrement] = useState(3);
  const [activeFilter, setActiveFilter] = useState("");
  const [visibleItems, setVisibleItems] = useState([]);
  const [noMorePost, setNoMorePost] = useState(false);

  useEffect(() => {
    setActiveFilter(filters[0].name.toLowerCase());
    setVisibleItems(getAllItems.filter((item) => item.id <= 6));
  }, [getAllItems]);

  const handleChange = (e) => {
    console.log(e.target.value);
    e.preventDefault();
    let targetFilter = e.target.value
      ? e.target.value.toLowerCase()
      : e.target.textContent.toLowerCase();
    setActiveFilter(targetFilter);
    let tempData;
    if (targetFilter === filters[0].name.toLowerCase()) {
      tempData = getAllItems.filter((data) => data.id <= dataVisibleCount);
    } else {
      tempData = getAllItems.filter((data) => {
        return (
          data.category.includes(targetFilter) && data.id <= dataVisibleCount
        );
      });
    }
    setVisibleItems(tempData);
  };

  const handleLoadmore = (e) => {
    e.preventDefault();
    let tempCount = dataVisibleCount + dataIncrement;

    if (tempCount > getAllItems.length) {
      setNoMorePost(true);
    } else {
      setDataVisibleCount(tempCount);
      if (activeFilter === filters[0].name.toLowerCase()) {
        setVisibleItems(getAllItems.filter((data) => data.id <= tempCount));
      } else {
        let items = getAllItems.filter((data) => {
          return data.category.includes(activeFilter) && data.id <= tempCount;
        });
        setVisibleItems(items);
      }
    }
  };

  return (
    <>

      

      <div className="pf-filter-wrapper mb-4">
        <select
          className="portfolio-filter-mobile"
          onChange={(e) => handleChange(e)}
        >
          {filters.map((filter) => (
            <option value={filter.name} key={filter.id}>
              {filter.name}
            </option>
          ))}
        </select>
      </div>

      <div className="row portfolio-wrapper">
        {visibleItems.map((item) => (
          <div className="col-md-4 col-sm-6 grid-item" key={item.id}>
            <Portfolio portfolio={item} />
          </div>
        ))}
      </div>

      {noMorePost ? null : (
        <div className="load-more text-center mt-4">
          <a
            href="#!"
            className="btn btn-default"
            onClick={(e) => handleLoadmore(e)}
          >
            <i className="fas fa-circle-notch"></i> Load more
          </a>
        </div>
      )}
    </>
  );
}

export default Portfolios;
