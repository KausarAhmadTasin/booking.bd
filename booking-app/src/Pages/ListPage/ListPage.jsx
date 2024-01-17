import { useLocation } from "react-router-dom";
import "./ListPage.css";
import { format } from "date-fns";

const ListPage = () => {
  const state = useLocation();
  const {
    date,
    personNumber: { adult, children, rooms },
    searchTerm,
  } = state.state;
  const { startDate, endDate } = date[0];

  console.log(
    format(startDate, "dd/MM/yyyy"),
    format(endDate, "dd/MM/yyyy"),
    adult,
    searchTerm
  );
  return (
    <>
      <div className="list-container">
        <div className="search-data">
          <div className="row-flex rem2-gap">
            <div className="row-flex label-gap">
              <label htmlFor="destination">Destination: </label>
              <input type="text" value={searchTerm} />
            </div>
            <div className="row-flex label-gap">
              <label htmlFor="date">Date: </label>
              <input
                className="date-input"
                type="text"
                value={`${format(startDate, "dd/MM/yyyy")} to ${format(
                  endDate,
                  "dd/MM/yyyy"
                )}`}
              />
            </div>
          </div>
          <div className="row-flex rem2-gap">
            <div className="row-flex label-gap">
              <label htmlFor="adults">Adult: </label>
              <input type="text" value={adult} />
            </div>
            <div className="row-flex label-gap">
              <label htmlFor="children">Children: </label>
              <input type="text" value={children} />
            </div>
            <div className="row-flex label-gap ">
              <label htmlFor="rooms">Rooms: </label>
              <input type="text" value={rooms} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListPage;
