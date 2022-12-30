import styled from 'styled-components';

interface CardProps {
  title: string;
  children: React.ReactNode;

}

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 400px;
  margin: 10px auto;
  overflow: hidden;

  .card__header {
    display: flex;
    align-items: center;
    padding: 16px;
    background-color: #eee;
    border-bottom: 1px solid #ccc;
  }

  .card__title {
    margin: 0;
    font-size: 18px;
    font-weight: 500;
    color: #333;
  }

  .card__body {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 16px;
  }

  .card__content {
    flex: 1;
  }

  .card__footer {
    display: flex;
    align-items: center;
    padding: 16px;
    background-color: #eee;
    border-top: 1px solid #ccc;
  }
`;

export const StyledCard: React.FC<CardProps> = ({ title, children }) => (
  <Card >
    <header className="card__header">
      <h2 className="card__title">{title}</h2>
    </header>
    <div className="card__body">
      <div className="card__content" >
        {children}
      </div>
    </div>
  </Card>
);