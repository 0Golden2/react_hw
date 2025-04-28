import { Flex, Input, Pagination, Select } from "antd";
import "./MoviesPage.css";
import { moviesMock } from "../../utils/mockData";
import MovieCard from "../../components/movieCard/MovieCard";

const MoviesPage = () => {
  const genreOptions = [
    { value: "фантастика", label: "Фантастика" },
    { value: "приключения", label: "Приключения" },
    { value: "драма", label: "Драма" },
    { value: "биография", label: "Биография" },
    { value: "история", label: "История" },
    { value: "комедия", label: "Комедия" },
    { value: "фэнтези", label: "Фэнтези" },
    { value: "триллер", label: "Триллер" },
    { value: "боевик", label: "Боевик" },
    { value: "криминал", label: "Криминал" },
    { value: "детектив", label: "Детектив" },
    { value: "музыка", label: "Музыка" },
  ];
  return (
    <div id="movies-page">
      <Flex gap={30}>
        <Input.Search onSearch={() => {}} />
        <Select
          className="tag-select"
          mode="multiple"
          allowClear
          maxTagCount={2}
          options={genreOptions}
          onChange={() => {}}
        />
      </Flex>
      <div className="movies-list">
        {moviesMock.map((item) => (
          <MovieCard item={item} />
        ))}
      </div>
      <Pagination showQuickJumper defaultCurrent={2} total={20} />
    </div>
  );
};

export default MoviesPage;
