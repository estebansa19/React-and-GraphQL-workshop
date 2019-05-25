import React from "react";
import { Query, Mutation } from "react-apollo";
import { FAMILIES, SEND_AT_WAR } from "../../../queries";
import FamiliesList from "../exerciseTwo/FamiliesList";

/**
  * Ahora usemos Mutaciones. Las mutaciones nos entregan una callback que podemos despachar al momento que se realiza una acción.
  * En este caso listaremos de nuevo las familias pero ahora seleccionando alguna la enviaremos a la guerra en busca del Trono de Hierro.

  * El Query tendrá la responsabilidad de obtener las familias (query={FAMILIES}) para que <FamiliesList /> las pueda mostrar.
  * La mutación usara una prop mutation que hara referencia a la operación SEND_AT_WAR y nos entregará el callback para que sea llamado en cada uno de las familias del <FamiliesList /> cuando estas sean clickeadas (handleClick)
  * <FamiliesList /> recibe families (data.families), handleClick (sendAtWar), refetch.
*/

const ExerciseThree = () => (
  <Query query={FAMILIES}>
    {({ data, loading, error, refetch }) => {
      if (loading) return <h3>Loading...</h3>
      if (error) return <h3>Error</h3>

      /* Obten los datos de la petición en el callback y
       valida que todo este listo para retornar tu componente lista */
      return (
        <Mutation mutation={SEND_AT_WAR}>
          {sendAtWar => (
            <FamiliesList  families={data.families} handleClick={sendAtWar} refetch={refetch} />
          )}
        </Mutation>
      );
    }}
  </Query>
);

export default ExerciseThree;
