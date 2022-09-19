

-- -----------------------------------------Insert user during signup------------------------------------------------

-- CREATE PROCEDURE insertUser( @id VARCHAR(80), @fullNames VARCHAR(255), @email VARCHAR(200), @phoneNumber VARCHAR(200), @password VARCHAR(200))

-- AS BEGIN

-- INSERT INTO Users (UserID,FullNames,EmailAddress,PhoneNumber, Password) VALUES (@id, @fullNames,@email,@phoneNumber, @password)

-- END
    

-- ----------------------------------GET USERS DURING LOGIN----------------------------------------------------------

-- CREATE PROCEDURE getUser(@email VARCHAR(255))
-- AS
-- BEGIN
-- SELECT * FROM Users WHERE EmailAddress =@email
-- END


------------------------------------------------------Parcels.-------------------------------------------

-- 	CREATE PROCEDURE InsertUpdateParcel
-- (
-- 		@ParcelID INTEGER  NULL,
-- 		@ParcelDescription varchar(255)  NULL  ,
--         @DispatchedFrom varchar(255)  NULL  ,
--         @Destination varchar(255)  NULL  ,
--         @p_weight varchar(255)  NULL  , 
--         @P_Status varchar(255)  NULL   ,
--         @P_TimeOut varchar(255)  NULL ,
--         @P_ArrivalTime varchar(255)  NULL  ,
-- 		@Sender_Email varchar(255)  NULL  ,
-- 		@ReceiverName varchar(255)  NULL  ,
-- 		@ReceiversNumber varchar(255)  NULL  

--        -- @is_delived bit ,
--        -- @is_dispatched bit ,
--        -- @lat INTEGER  NULL,
--        -- @logi INTEGER  NULL,
--        -- @time_Dispatched  varchar(255)  NULL ,
--        -- @weight  varchar(255)  NULL  
  
-- 	)
-- AS
-- begin
-- if exists (select *  from Parcels  where ParcelID=@ParcelID)
-- begin
--     update Parcels set 
-- 		ParcelID = @ParcelID ,
-- 		ParcelDescription=@ParcelDescription ,
--         DispatchedFrom=@DispatchedFrom  ,
--         Destination = @Destination   ,
--         p_weight=@p_weight  , 
--         P_Status = @P_Status ,
-- 		P_TimeOut = @P_TimeOut  ,
--         P_ArrivalTime= @P_ArrivalTime,
--         Sender_Email =@Sender_Email ,
--         ReceiverName =@ReceiverName   ,
--         ReceiversNumber =@ReceiversNumber
       
-- end
-- else 
-- begin
-- 		 INSERT INTO Parcels(
-- 		ParcelID,
-- 		ParcelDescription,
--         DispatchedFrom ,
--         Destination ,
--         p_weight, 
--         P_Status,
-- 		P_TimeOut ,
--         P_ArrivalTime,
--         Sender_Email ,
--         ReceiverName ,
--         ReceiversNumber 
-- 		 )
-- 		VALUES(
-- 		@ParcelID ,
-- 		@ParcelDescription ,
--         @DispatchedFrom  ,
-- 		@Destination   ,
--         @p_weight  , 
--         @P_Status ,
-- 		@P_TimeOut  ,
--         @P_ArrivalTime,
-- 		@Sender_Email ,
-- 		@ReceiverName   ,
--         @ReceiversNumber
-- 	) 
--     end

-- END





-- CREATE PROCEDURE get_all_parcels

--  AS

--  BEGIN

--  select * from Parcels

--  END





-- CREATE PROCEDURE deleteParcel(@ParcelID int)

--  AS
--  BEGIN
--  DELETE FROM Parcels  WHERE  ParcelID =@ParcelID
--  END





-- CREATE PROCEDURE get_single_parcel(@parcelID int)

--  AS

--  BEGIN

--  select * from Parcels where   ParcelID =@parcelID;

--  END




-- CREATE PROCEDURE softDeleteParcel(@ParcelID VARCHAR(80))
-- AS

-- BEGIN

--     IF EXISTS(SELECT * FROM Parcels WHERE ParcelID=@ParcelID)

--     BEGIN
--         UPDATE Parcels SET Is_Deleted =1 WHERE ParcelID =@ParcelID
--     END
--     ELSE
--     BEGIN
--         RAISERROR ('No parcel with that ID',11,1);
--         RETURN
--     END

-- END


-- ....................................


--   ALTER TABLE Users
-- ADD Issent varchar(10) DEFAULT 0;