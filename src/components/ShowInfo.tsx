type ShowInfo = {
    name: string
}

const ShowInfo = (props: ShowInfo) => {
    return <div>
        {props.name}
    </div>
};

export default ShowInfo