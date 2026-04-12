import React from 'react'

import gsap from "gsap";
import { Draggable } from "gsap/Draggable";

import {WINDOW_CONFIG} from "#constants";

import Navbar from "#components/Navbar.jsx";
import {Welcome} from "#components/index.js";
import Dock from "#components/Dock.jsx";
import {Terminal} from "#windows";

gsap.registerPlugin(Draggable);

const App = () => {
    return (
        <main>
            <Navbar />
            <Welcome />
            <Dock />

            <Terminal />
        </main>
    );
};
export default App;
