import "./Home.css";
import SearchInput from "../../Components/SearchInput/SearchInput";
import { useEffect, useRef, useState } from "react";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { FiSearch } from "react-icons/fi";
import { IoBedOutline } from "react-icons/io5";
import { GoChevronDown } from "react-icons/go";
import { Calendar, DateRange } from "react-date-range";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showCalender, setShowCalender] = useState(false);
  const [showPersonSelector, setPersonSelector] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [personNumber, setPersonNumber] = useState({
    adult: 1,
    children: 0,
    rooms: 1,
  });
  const menuRef = useRef(null);
  const navigate = useNavigate();

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCalender = (show) => {
    if (show === "calender") setShowCalender(!showCalender);
    else setPersonSelector(!showPersonSelector);
  };

  const handleNumberChange = (number, operation) => {
    setPersonNumber((prevPersonNumber) => ({
      ...prevPersonNumber,
      [number]:
        operation === "increment"
          ? prevPersonNumber[number] + 1
          : prevPersonNumber[number] - 1,
    }));
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowCalender(false);
        setPersonSelector(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  const handleSearchClick = () => {
    navigate("/listpage", { state: { date, personNumber, searchTerm } });
  };

  return (
    <>
      <div className="home-container">
        <section className="hero-section">
          <div className="hero-text-content">
            <h1 className="hero-title">Discover Your Perfect Getaway</h1>
            <p className="hero-para">
              Indulge in unparalleled luxury and create lasting memories with
              our exquisite accommodations – where every stay is a journey into
              unparalleled comfort and sophistication.
            </p>
            <button className="hero-btn">Explore Now</button>
          </div>
          <div className="hero-img">
            <img src="../../../public/hero-img.jpg" alt="" />
          </div>
        </section>

        <div className="search-box" ref={menuRef}>
          <IoBedOutline className="bed-icon" />
          <div>
            <SearchInput
              placeholder="Destination"
              handleSearchChange={handleSearchChange}
            />
          </div>
          <div className="date-range-picker">
            <div className="date-container">
              <button
                className="number-of-person-btn"
                onClick={() => handleCalender("calender")}
              >
                {`${format(date[0].startDate, "dd / MM / yyyy")} to ${format(
                  date[0].endDate,
                  "dd / MM / yyyy"
                )}`}
                <GoChevronDown />
              </button>
              {showCalender && (
                <DateRange
                  editableDateInputs={true}
                  onChange={(item) => setDate([item.selection])}
                  moveRangeOnFirstSelection={false}
                  ranges={date}
                  className="date"
                  minDate={new Date()}
                />
              )}
            </div>
          </div>

          <div className="number-of-person">
            <button
              className="number-of-person-btn"
              onClick={() => handleCalender("personSelector")}
            >
              {`Adult: ${personNumber.adult} Children: ${personNumber.children} Rooms: ${personNumber.rooms}`}
              <GoChevronDown />
            </button>
            {showPersonSelector && (
              <div className="person-selector-box">
                <div className="person-row">
                  <p className="person-row-option">Adults</p>
                  <button
                    className="inc-dec-btn"
                    onClick={() => handleNumberChange("adult", "decrement")}
                    disabled={personNumber.adult <= 1}
                  >
                    -
                  </button>
                  <p>{personNumber.adult}</p>
                  <button
                    className="inc-dec-btn"
                    onClick={() => handleNumberChange("adult", "increment")}
                  >
                    +
                  </button>
                </div>
                <div className="person-row">
                  <p className="person-row-option">Children</p>
                  <button
                    className="inc-dec-btn"
                    disabled={personNumber.children <= 0}
                    onClick={() => handleNumberChange("children", "decrement")}
                  >
                    -
                  </button>
                  <p>{personNumber.children}</p>
                  <button
                    className="inc-dec-btn"
                    onClick={() => handleNumberChange("children", "increment")}
                  >
                    +
                  </button>
                </div>
                <div className="person-row">
                  <p className="person-row-option">Rooms</p>
                  <button
                    className="inc-dec-btn"
                    disabled={personNumber.rooms <= 1}
                    onClick={() => handleNumberChange("rooms", "decrement")}
                  >
                    -
                  </button>
                  <p>{personNumber.rooms}</p>
                  <button
                    className="inc-dec-btn"
                    onClick={() => handleNumberChange("rooms", "increment")}
                  >
                    {" "}
                    +
                  </button>
                </div>
                <div className="number-of-person-complete-btn">
                  <button onClick={() => handleCalender()}>Complete</button>
                </div>
              </div>
            )}
          </div>
          <button className="search-btn" onClick={() => handleSearchClick()}>
            <FiSearch /> Search
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
