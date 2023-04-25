import styled from "styled-components"

const Skeleton = () => {
  return <Card>
    <Capa />

    <Title />
    <Description size={85} />
    <Description size={80} />
    <Description size={65} />

    <div style={{
      width: '100%',
      display: "grid",
      gridTemplateColumns: '50px auto',
      gap: '10px',
      position: 'absolute',
      bottom: '10px'
    }}>
      <User />

      <div style={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: '10px'
      }}>
        <Description size={40} />
        <Description size={30} />
      </div>
    </div>
  </Card>
}

const skeleton = styled.div`
  background-image: linear-gradient(
    to right,
    #3e3e3e 0%,
    #343333 10%,
    #3e3e3e 20%,
    #3e3e3e 100%
  );
  background-size: 200% 100%;
  animation: bgPos 1s linear infinite;

  @keyframes bgPos {
    0% {
      background-position: 50% 0;
    }

    100% {
      background-position: -150% 0;
    }
  }
`

const Capa = styled(skeleton)`
  width: 100%;
  height: 200px;
  border-radius: 5px;
`

const Title = styled(skeleton)`
  width: 60%;
  height: 15px;
  border-radius: 10px;
  margin: 10px 0;
`

const Description = styled(skeleton) <{
  size: number
}>`
  width: ${p => p.size}%;
  height: 8px;
  border-radius: 10px;
`

const User = styled(skeleton)`
  width: 100%;
  aspect-ratio: 1/1;
  border-radius: 50%;
`

const Card = styled.div`
  width: 100%;
  max-width: 330px;
  border-radius: 10px;
  box-shadow: 0 0 10px 5px var(--colorSubDark);
  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow: hidden;
  padding: 10px;
  height: 400px;
  position: relative;
`

export default Skeleton;