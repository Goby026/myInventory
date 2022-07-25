import { useEffect, useState } from "react";
import { BrandsForm } from "./BrandsForm";

export const BrandsPage = () => {
  const [brands, setBrands] = useState([]);
  const [brand, setBrand] = useState({});
  const [editForm, setEditForm] = useState(false);

  const onShowEditForm = ( marca={} ) => {
    setBrand(marca);
  };

  useEffect(() => {
    console.log('limpiar formulario');
  }, [brand])
  

  useEffect(() => {
    const onListBrands = async () => {
      const URL = `http://localhost:8080/api/marcas`;

      // fetch(URL)
      // .then((response) => response.json())
      // .then((data) => console.log(data));

      const response = await fetch(URL, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();

      setBrands(data);
    };

    onListBrands();
  }, []);

  return (
    <>
      <div className="row mt-4">
        <div className="col-md-12 d-flex justify-content-between">
          <h4 className="text-primary">
            <i className="bi bi-bookmark-fill"></i>
            Marcas
          </h4>

          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="button">
            <i className="bi bi-search"></i>
            </button>
          </form>

          <button
            onClick={ onShowEditForm }
            className="btn btn-outline-primary border-0"
          >
            <i className="bi bi-plus-square-fill"></i>
          </button>
        </div>
      </div>
      <hr />

      <div className="row">
        <div className="col-md-8">
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {brands.map((brand) => (
              // <li key={brand.id}>{brand.nombre}</li>
              <div className="col" key={brand.id}>
                <div className="card shadow-sm h-100">
                  <img src="..." className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{brand.nombre}</h5>
                    <p className="card-text">{brand.descripcion}</p>
                    <code> {brand.cod_marca} </code>
                  </div>
                  <div className="card-footer">
                    <small className="text-muted">
                      Created {brand.created_at}
                    </small>
                    <button onClick={ () => onShowEditForm(brand)} type="button" className="btn btn-info w-100">
                      <i className="bi bi-pencil"></i>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="col-md-4">{editForm && <BrandsForm marca={ brand } />}</div>
      </div>
    </>
  );
};
