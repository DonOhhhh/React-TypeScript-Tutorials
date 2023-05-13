type StatusProps = {
    status: "loading" | "success" | "error";
};

export const Status = (props: StatusProps) => {
    let message;
    switch (props.status) {
        case "loading":
            message = "Loading...";
            break;
        case "success":
            message = "Data fetched Successfully!";
            break;
        case "error":
            message = "Error fetching data";
            break;
    }

    return (
        <div>
            <h2>Status - {message}</h2>
        </div>
    );
};
