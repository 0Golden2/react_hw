import React from "react";
import { Layout, Typography, Row, Col } from "antd";
import "./UserPage.css";
import MovieCard from "../../components/movieCard/MovieCard";
import { moviesMock } from "../../utils/mockData";

const { Header, Content } = Layout;
const { Title, Text } = Typography;

const UserPage = () => {
  const userInfo = {
    name: "Ксения Цыгулева",
    email: "example@mail.ru",
    role: "критик",
    favoriteGenres: "драма, боевик, фантастика",
  };

  return (
    <Layout className="user-page-layout">
      <Header className="user-page-header">
        <Title level={3} className="user-page-title">
          Главная
        </Title>
        <Title level={3} className="user-page-title">
          Фильмы
        </Title>
      </Header>
      <Content className="user-page-content">
        <div className="user-info-section">
          <Title level={2}>Обо мне</Title>
          <Row gutter={[16, 16]}>
            <Col span={6}>
              <Text>имя</Text>
            </Col>
            <Col span={18}>
              <Text>{userInfo.name}</Text>
            </Col>
            <Col span={6}>
              <Text>почта</Text>
            </Col>
            <Col span={18}>
              <Text>{userInfo.email}</Text>
            </Col>
            <Col span={6}>
              <Text>роль</Text>
            </Col>
            <Col span={18}>
              <Text>{userInfo.role}</Text>
            </Col>
            <Col span={6}>
              <Text>любимые жанры</Text>
            </Col>
            <Col span={18}>
              <Text>{userInfo.favoriteGenres}</Text>
            </Col>
          </Row>
        </div>
        <div className="saved-movies-section">
          <Title level={2}>Сохраненные фильмы</Title>
          <Row gutter={[16, 16]}>
            {moviesMock.slice(0, 6).map((movie) => (
              <Col xs={24} sm={12} md={8} lg={6} key={movie.id}>
                <MovieCard item={movie} />
              </Col>
            ))}
          </Row>
        </div>
      </Content>
    </Layout>
  );
};

export default UserPage;
