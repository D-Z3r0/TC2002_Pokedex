import { Box, Tab, Tabs } from "@mui/material";
import "./PokemonInfo.css";
import React from "react";
import { Pokemon } from "../../models/Pokemon";

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            className="Cont"
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <div>{children}</div>
                </Box>
            )}
        </div>
    );
}

interface PokemonInfoProps {
    pokemon: Pokemon;
}

function PokemonInfo(props: PokemonInfoProps) {
    const [value, setValue] = React.useState(0);
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <div className="Contenedor">
            <h1 className="Name">{props.pokemon.name}</h1>
            <img className="Image" src={props.pokemon.sprites.other["official-artwork"].front_default} alt={props.pokemon.name} />
            <div className="Interfaz">
                <img className="Image" src={props.pokemon.sprites.other["official-artwork"].front_default}></img>
            </div>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab style={{ color: "white" }} label="Moves" />
                    <Tab style={{ color: "white" }} label="Abilities" />
                </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
                <div style={{ color: "white" }}>
                    <div className={`table-container ${props.pokemon.moves.length > 10 ? "with-scroll" : ""}`}>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Move Name</th>
                                </tr>
                            </thead>
                            <tbody>
                                {props.pokemon.moves.map((move, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{move.move.name}</td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                <div style={{ color: "white" }}>
                    <div className={`table-container ${props.pokemon.abilities.length > 10 ? "with-scroll" : ""}`}>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Ability Name</th>
                                </tr>
                            </thead>
                            <tbody>
                                {props.pokemon.abilities.map((ability, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{ability.ability.name}</td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </CustomTabPanel>
        </div>
    );
}

export default PokemonInfo;