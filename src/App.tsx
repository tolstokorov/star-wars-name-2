import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dec, inc, set } from "./slices/id";
import { hide, show, toggle } from "./slices/is-name-visible";
import './main.css';
import { RootState } from "./store";
import { useGetOnePeopleByIDQuery } from "./api/swapi";



const App: FC = () => {
    const MAX = 15;

    const dispatch = useDispatch();

    const isNameShow = useSelector((state: RootState) => state.showName.isNameVisible);
    const onShowBtnClick = () => dispatch(show());
    const onHideBtnClick = () => dispatch(hide());
    const onToggleBtnClick = () => dispatch(toggle());

    const id = useSelector((state: RootState) => state.person.id);
    const onPrevBtnClick = () => dispatch(dec());
    const onNextBtnClick = () => dispatch(inc());
    const onRandomBtnClick = () => dispatch(set(Math.ceil(Math.random() * MAX)));

    const onePeople = useGetOnePeopleByIDQuery(String(id));
    const { isError, isFetching } = onePeople;
    const name = onePeople.data?.name || 'no name';

    console.log(isError, isFetching, name);

    return <div>
        <h1>
            {
                isNameShow ? (
                    isError ? <>error</> :
                    isFetching ? <span className='loader'></span> :
                    name
                ) :
                <>&nbsp;</>
            }
        </h1>
        <button onClick={ onShowBtnClick }>show</button>
        <button onClick={ onHideBtnClick }>hide</button>
        <button onClick={ onToggleBtnClick }>toggle</button>
        <br />
        <br />
        <br />
        <button disabled={ id === 1 } onClick={ onPrevBtnClick }>prev</button>
        <button disabled={ id === MAX }onClick={ onNextBtnClick }>next</button>
        <button onClick={ onRandomBtnClick }>random</button>
    </div>;
}

export default App;
