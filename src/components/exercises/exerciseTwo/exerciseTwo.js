import React from "react";
import FamiliesList from "./FamiliesList";
import {  } from "react-apollo";
import {  } from "../../queries";

/*
  ** Construyamos un componente que nos permita obtener los datos
    para renderizar el listado de familias de Westeros.

    Tu componente <Query /> necesita un prop query con la consulta que
    necesitamos ---> FAMILIES. Luego haciendo uso de la render prop que nos
    facilita React Apollo pasale a la lista de Familias la respuesta del servidor GQL ----> <FamiliesList  families={data.families} />
    ; No olvides que la render prop te permite obtener información sobre si
    - La peticion ya fue resuelta [if (loading) return <p>Loading</p>]
    - Hubo un error [if (error) return <p>Error</p>]
    - Hay información [return <AnyComponent data />]
*/

const ExerciseTwo = () => (
  <Query query={}>
    {({ }) => {
      /* Obten los datos de la petición en el callback y
       valida que todo este listo para retornar tu componente lista */
    }}
  </Query>
);

export default ExerciseTwo;
