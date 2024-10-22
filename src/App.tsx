import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setActions } from './features/actions/actionsSlice';
import ActionsTable from './components/ActionsTable';
import { AppDispatch } from './store/store';
import { userActions } from './data/userActions'; // Импортируем начальные данные

const App: React.FC = () => {
  // Инициализируем dispatch для вызова действий из Redux
  const dispatch: AppDispatch = useDispatch();

  // Используем useEffect, чтобы выполнить действие один раз при монтировании компонента
  useEffect(() => {
    // Отправляем действие в Redux для установки данных
    dispatch(setActions(userActions));
  }, [dispatch]); // Пустой массив зависимостей означает, что useEffect вызовется один раз при монтировании

  // Рендерим компонент ActionsTable
  return (
      <div className="App">
        <ActionsTable />
      </div>
  );
};

export default App;
