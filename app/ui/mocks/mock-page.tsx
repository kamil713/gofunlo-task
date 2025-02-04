import {Typography} from "@mui/material";

interface MockProps {
    title: string;
}

export default function MockPage({ title } : MockProps) {
    return (
        <main className="flex p-5">
            <Typography variant="h4" component="h2" sx={{fontWeight: "bold", color: "#042675"}}>
                {title}
            </Typography>
        </main>
    );
}