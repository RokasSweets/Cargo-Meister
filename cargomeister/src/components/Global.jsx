import { createContext, useEffect, useState } from 'react';

import { useWriteContainer } from '../use/useWriteContainer';
import { useWriteBoxes } from '../use/useWriteBoxes';
import axios from 'axios';
import { useReadContainer } from '../use/useReadContainer';
import { useReadBoxes } from '../use/useReadBoxes';

const sizes = [
    {size: 'S', typeTitle: 'S'},
    {size: 'M', typeTitle: 'M'},
    {size: 'L', typeTitle: 'L'}
];

const flammable = [
    {fire: 'yes', fireTitle: 'Yes'},
    {fire: 'no', fireTitle: 'No'}
];

const expirydate = [
    {time: 'noexpirydate', timeTitle: 'No expiry date'},
    {time: 'yesexpirydate', timeTitle: 'Has expiry date'}
]



export const Global = createContext();

export const GlobalProvider = ({children}) => {
    const [containerlist, updateContainerlist] = useReadContainer();
    const [containerResponse, setCreateContainer, setEditContainer, setDeleteContainer] =
    useWriteContainer();

    const [boxeslist, updateBoxeslist] = useReadBoxes();
    const [boxesResponse, setCreateBoxes, setEditBoxes, setDeleteBoxes] = useWriteBoxes();

    useEffect(() => {
        updateContainerlist(Date.now());
    }, [updateContainerlist, containerResponse]);

    useEffect(() => {
        updateBoxeslist(Date.now());
    }, [updateBoxeslist, boxesResponse]);



    return (
        <Global.Provider value={{
            sizes,
            flammable,
            expirydate,

            setCreateContainer,
            containerlist,
            updateContainerlist,
            setCreateBoxes,
            boxeslist,
            updateBoxeslist
            
        }}>
            {children}
        </Global.Provider>
    )
}