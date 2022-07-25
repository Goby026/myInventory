export const ProductsPage = () => {
  return (
    <>
      <div className="row mt-4">
      <div className="col-md-12 d-flex justify-content-between">

          <h4 className="text-primary">
            <i className="bi bi-bookmark-fill"></i>
            Productos
          </h4>

          <button className="btn btn-outline-primary border-0">
            <i className="bi bi-plus-square-fill"></i>
          </button>
          
        </div>
      </div>

      <hr />

      <div className="row">
        <div className="col-md-8">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td colSpan="2">Larry the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col-md-4">
          <form>
            <fieldset disabled>
              <legend>Disabled fieldset example</legend>
              <div className="mb-3">
                <label htmlFor="disabledTextInput" className="form-label">
                  Disabled input
                </label>
                <input
                  type="text"
                  id="disabledTextInput"
                  className="form-control"
                  placeholder="Disabled input"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="disabledSelect" className="form-label">
                  Disabled select menu
                </label>
                <select id="disabledSelect" className="form-select">
                  <option>Disabled select</option>
                </select>
              </div>
              <div className="mb-3">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="disabledFieldsetCheck"
                    disabled
                  />
                  <label className="form-check-label" htmlFor="disabledFieldsetCheck">
                    Can't check this
                  </label>
                </div>
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </>
  );
};
