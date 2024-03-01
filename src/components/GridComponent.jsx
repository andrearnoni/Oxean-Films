import { useState, useEffect } from 'react';
import { Grid, GridColumn as Column, GridToolbar } from '@progress/kendo-react-grid';
import { Input } from '@progress/kendo-react-inputs';
import { process, filterBy } from '@progress/kendo-data-query';
import '@progress/kendo-theme-default/dist/all.css';
import '../styles/GridComponent.css';

function GridComponent({ filmsPerPage }) {
  const [dataState, setDataState] = useState({ skip: 0, take: 5 });
  const [filter, setFilter] = useState(null);
  const [result, setResult] = useState(process(filmsPerPage, dataState));

  // Atualize para aplicar filtragem junto com paginação
  useEffect(() => {
    setResult(process(filter ? filterBy(filmsPerPage, filter) : filmsPerPage, dataState));
  }, [filmsPerPage, dataState, filter]);

  const filterData = (e) => {
    const value = e.target.value;
    const newFilter = value ? {
      logic: "or",
      filters: [
        { field: "id", operator: "contains", value },
        { field: "title", operator: "contains", value },
        { field: "release_date", operator: "contains", value },
        { field: "vote_average", operator: "contains", value },
      ],
    } : null; // Limpa o filtro se a caixa de pesquisa estiver vazia

    setFilter(newFilter); // Atualiza o estado do filtro
    setDataState({ ...dataState, skip: 0 }); // Reinicia a paginação ao filtrar
  };

  const onDataStateChange = (e) => {
    setDataState(e.dataState);
  };

  return (
    <>
      <h1>Tabela de Filmes</h1>
      <Grid
        data={ result }
        filterable={ true }
        onDataStateChange={ onDataStateChange }
        pageable={ true }
        total={ filmsPerPage.length }
        { ...dataState }
      >
        <GridToolbar>
          <Input onChange={filterData} placeholder="Pesquisar..." />
        </GridToolbar>
        <Column field="id" title="ID" />
        <Column field="title" title="Filme" />
        <Column field="release_date" title="Lançamento" />
        <Column field="vote_average" title="Nota" />
      </Grid>
    </>
  );
}

export default GridComponent;
