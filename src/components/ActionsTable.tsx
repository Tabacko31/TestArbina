import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store'; // Убедитесь, что путь к store правильный
import { HTMLTable, InputGroup } from '@blueprintjs/core';
import { UserAction } from '../features/actions/actionsSlice'; // Импорт интерфейса UserAction


const ActionsTable: React.FC = () => {
    // Получаем список действий из Redux
    const actions = useSelector((state: RootState) => state.actions.actions);
    const [filter, setFilter] = useState('');

    // Фильтрация списка действий
    const filteredActions = actions.filter((action: UserAction) =>
        action.username.includes(filter) || action.action.includes(filter)
    );

    return (
        <div>
            <InputGroup
                leftIcon="filter"
                onChange={(e) => setFilter(e.target.value)}
                placeholder="Фильтр по имени пользователя или действию..."
                value={filter}
            />
            <HTMLTable striped bordered>
                <thead>
                <tr>
                    <th>Имя пользователя</th>
                    <th>Действие</th>
                    <th>Дата создания</th>
                </tr>
                </thead>
                <tbody>
                {filteredActions.map((action: UserAction, index: number) => (
                    <tr key={index}>
                        <td>{action.username}</td>
                        <td>{action.action}</td>
                        <td>{new Date(action.action_created_at).toLocaleString()}</td>
                    </tr>
                ))}
                </tbody>
            </HTMLTable>
        </div>
    );
};

export default ActionsTable;

