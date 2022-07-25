import { useForm } from "../../helpers/useForm";


export const BrandsForm = ( {marca={}} ) => {

    console.log(marca);

    const { formState, onInputChange, onResetForm } = useForm({
        nombre: marca.nombre,
        descripcion: marca.descripcion,
        cod_marca: marca.cod_marca,
    });

    // const { formState, onInputChange, onResetForm } = useForm({
    //     nombre: '',
    //     descripcion: '',
    //     cod_marca: '',
    // });

    const { nombre, descripcion, cod_marca } = formState;


    const onFormSubmit = (e)=>{

        e.preventDefault();

        if(nombre === '' || descripcion === '' || cod_marca === '') {
            return
        };

        const URL = `http://localhost:8080/api/marcas`;

        let marca = {
            nombre, descripcion, cod_marca
        }

        fetch(URL, {
        method: "POST",
        body: JSON.stringify(marca),
        headers: {"Content-type": "application/json; charset=UTF-8"}
        })
        .then(response => response.json()) 
        .then(json => console.log(json))
        .catch(err => console.log(err));

    }
    

  return (
    <>
        <form onSubmit={ onFormSubmit }>

            <div className="mb-3">
                <label htmlFor="txtNombre" className="form-label">Nombre</label>
                <input type="text" className="form-control" id="txtNombre" value={nombre} onChange={ onInputChange } name="nombre" />
            </div>

            <div className="mb-3">
                <label htmlFor="txtDescripcion" className="form-label">Descripción</label>
                <input type="text" className="form-control" id="txtDescripcion" value={descripcion} onChange={ onInputChange } name="descripcion" />
            </div>

            <div className="mb-3">
                <label htmlFor="txtCodMarca" className="form-label">Codigo-Marca</label>
                <input type="text" className="form-control" id="txtCodMarca" value={cod_marca} onChange={ onInputChange } name="cod_marca" />
            </div>
            
            <div className="d-flex justify-content-between">
                <button type="submit" className="btn btn-primary">Submit</button>
                <button onClick={ onResetForm } className="btn btn-warning">Reset</button>
            </div>
        </form>
    </>
  )
}
