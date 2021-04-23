module.exports = (sequelize , dataTypes) =>{

    let alias = "Tasks";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        task: {
            type: dataTypes.STRING,
            allowNull: false
        },
    }

    let config = {
        tableName: "tasks",
        timestamps: false
    }
    const Task = sequelize.define(alias, cons, config);
    
    return Task;
}