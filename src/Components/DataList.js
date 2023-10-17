import DataItem from "./DataItem";

export default function DataList(props) {
    return (
      <section>
        {props.data.map((data) => (
          <DataItem
            key={data.id}
            tantargy={data.tantargy}
            temakor={data.temakor}
            feladas={data.feladas}
            leadas={data.leadas}
            leiras={data.leiras}
            tipus={data.tipus}
          />
        ))}
      </section>
    );
  }