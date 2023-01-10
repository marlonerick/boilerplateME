import * as S from './styles'

const Main = ({
  title = 'React Avançado',
  description = 'Typescript, ReactJS, NextJS e Styled Components'
}) => (
  <S.Wrapper>
    <S.Logo
      src="/img/logo.svg"
      alt="Imagem de um átomo com fundo no formato hexagonal rosa com escrito ao lado React avançado"
    />
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>

    <S.Illustration
      src="/img/hero-illustration.svg"
      alt="Um desenvolvedor de frente para 3 telas com código."
    ></S.Illustration>
  </S.Wrapper>
)

export default Main
