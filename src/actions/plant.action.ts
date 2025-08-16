import { getUserId } from "./user.action";

export async function getPlants(searchTerm?: String) {
  try {
    const currentUserId = await getUserId();

    const whereClause: any = {
      userId: currentUserId,
    };

    if(searchTerm) {
      whereClause.name = {
        contains: searchTerm,
        mode: "insensitive",
      };
    };

    
  } catch {

  }
}